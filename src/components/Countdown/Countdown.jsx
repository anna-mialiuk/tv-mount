import { useEffect, useState } from "react";

const COUNTDOWN_IN_MS = 5 * 60 * 1000;
const STORAGE_KEY = "offerEndTime";

function getTimeLeft() {
  if (typeof window === "undefined") {
    return COUNTDOWN_IN_MS;
  }

  let endTime = Number(localStorage.getItem(STORAGE_KEY));

  if (!endTime || endTime <= Date.now()) {
    endTime = Date.now() + COUNTDOWN_IN_MS;
    localStorage.setItem(STORAGE_KEY, String(endTime));
  }

  return Math.max(0, endTime - Date.now());
}

function Countdown() {
  const [timeLeft, setTimeLeft] = useState(COUNTDOWN_IN_MS);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 10);

    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  const milliseconds = Math.floor((timeLeft % 1000) / 10);

  const formatTime = (value) => String(value).padStart(2, "0");

  return (
    <div className="offer__timer">
      <div className="offer__time">
        <span className="offer__number">{formatTime(minutes)}</span>
        <span className="offer__label">Minutes</span>
      </div>

      <span className="offer__separator">:</span>

      <div className="offer__time">
        <span className="offer__number">{formatTime(seconds)}</span>
        <span className="offer__label">Seconds</span>
      </div>

      <span className="offer__separator">:</span>

      <div className="offer__time">
        <span className="offer__number">{formatTime(milliseconds)}</span>
        <span className="offer__label">MS</span>
      </div>
    </div>
  );
}

export default Countdown;
