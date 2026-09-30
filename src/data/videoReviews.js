// Customer video reviews (public/video-reviews/):
// review-N.mp4  — the video (H.264, 720px wide, "faststart" so it starts quickly)
// review-N.webp — a frame from the video, shown instantly even on a slow connection
const videoReviews = [
  {
    id: "review-1",
    video: "/video-reviews/review-1.mp4",
    poster: "/video-reviews/review-1.webp",
  },
  {
    id: "review-2",
    video: "/video-reviews/review-2.mp4",
    poster: "/video-reviews/review-2.webp",
  },
  {
    id: "review-3",
    video: "/video-reviews/review-3.mp4",
    poster: "/video-reviews/review-3.webp",
  },
];

export default videoReviews;
