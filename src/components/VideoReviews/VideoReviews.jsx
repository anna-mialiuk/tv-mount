import { useRef, useState } from "react";

import videoReviews from "../../data/videoReviews";
import { trackEvent } from "../../utils/analytics";
import "./VideoReviews.sass";

function VideoReviews() {
  const [playingId, setPlayingId] = useState(null);
  const videoRefs = useRef({});

  const handlePlay = (id) => {
    // only one video at a time
    Object.entries(videoRefs.current).forEach(([videoId, video]) => {
      if (videoId !== id && video && !video.paused) video.pause();
    });

    const video = videoRefs.current[id];
    if (!video) return;

    setPlayingId(id);
    video.play().catch(() => setPlayingId(null));
    trackEvent("video_review_play", { video_id: id });
  };

  const handleEnded = (id) => {
    const video = videoRefs.current[id];
    // back to the cover, ready to be played again
    if (video) video.load();
    setPlayingId(null);
  };

  return (
    <section className="video-reviews">
      <div className="video-reviews__container container">
        <h2 className="video-reviews__title">What customers say?</h2>

        <ul className="video-reviews__list">
          {videoReviews.map((review, index) => {
            const isPlaying = playingId === review.id;

            return (
              <li className="video-reviews__card" key={review.id}>
                <video
                  ref={(node) => {
                    videoRefs.current[review.id] = node;
                  }}
                  className="video-reviews__video"
                  src={review.video}
                  // a small frame from the video: shows at once, even on slow internet;
                  // the video itself loads only after Play
                  poster={review.poster}
                  preload="none"
                  playsInline
                  controls={isPlaying}
                  onPause={() => {
                    if (isPlaying) setPlayingId(null);
                  }}
                  onPlay={() => setPlayingId(review.id)}
                  onEnded={() => handleEnded(review.id)}
                />

                {!isPlaying && (
                  <button
                    type="button"
                    className="video-reviews__play"
                    onClick={() => handlePlay(review.id)}
                    aria-label={`Play customer review ${index + 1}`}
                  >
                    <span className="video-reviews__play-icon" />
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default VideoReviews;
