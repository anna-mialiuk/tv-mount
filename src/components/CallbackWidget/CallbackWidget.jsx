import { useEffect, useRef, useState } from "react";

import sendLead from "../../utils/sendLead";
import "./CallbackWidget.sass";

const AUTO_OPEN_DELAY = 15000; // 15 s on the site -> friendly prompt
const PROMPT_SHOWN_KEY = "tvm_callback_prompt_shown";
const LEAD_SENT_KEY = "tvm_callback_sent";
const MIN_PHONE_DIGITS = 10;

// counted from the moment the site script loads
const SITE_LOADED_AT = Date.now();

const countDigits = (value) => value.replace(/\D/g, "").length;

// sessionStorage can be blocked (private mode, strict settings) — never crash on it
function readFlag(key) {
  try {
    return sessionStorage.getItem(key) === "1";
  } catch {
    return false;
  }
}

function writeFlag(key) {
  try {
    sessionStorage.setItem(key, "1");
  } catch {
    // ignore
  }
}

const texts = {
  manual: {
    title: "We’ll call you back",
    text: "Leave your number — we’ll call within 15 minutes and give you an exact price.",
  },
  prompt: {
    title: "Need help choosing? 👋",
    text: "Our technician can call you in 15 minutes, answer your questions and give you an exact price. Free, no obligation.",
  },
};

function CallbackWidget({ isQuizOpen = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState("manual");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState(""); // honeypot
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const inputRef = useRef(null);

  // Auto prompt: once per session, not over the quiz, not after a sent request
  useEffect(() => {
    if (isQuizOpen || readFlag(PROMPT_SHOWN_KEY) || readFlag(LEAD_SENT_KEY)) {
      return undefined;
    }

    const elapsed = Date.now() - SITE_LOADED_AT;
    const timer = setTimeout(
      () => {
        writeFlag(PROMPT_SHOWN_KEY);
        setMode("prompt");
        setIsOpen(true);
      },
      Math.max(0, AUTO_OPEN_DELAY - elapsed),
    );

    return () => clearTimeout(timer);
  }, [isQuizOpen]);

  // Close with Escape
  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleToggle = () => {
    // a manual open counts as "seen" — no auto prompt after that
    writeFlag(PROMPT_SHOWN_KEY);
    setMode("manual");
    setIsOpen((prev) => !prev);
  };

  const handleChange = (event) => {
    setPhone(event.target.value);
    if (error) setError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (countDigits(phone) < MIN_PHONE_DIGITS) {
      setError("Please enter a valid phone number");
      inputRef.current?.focus();
      return;
    }

    setIsSubmitting(true);

    try {
      await sendLead({
        formName:
          mode === "prompt"
            ? "Callback widget (15s prompt)"
            : "Callback widget",
        phone,
        company,
      });

      writeFlag(LEAD_SENT_KEY);
      setIsSent(true);
    } catch (submitError) {
      console.error("Callback widget submit error:", submitError);
      setError("Something went wrong. Please call us: (404) 793-8283");
    } finally {
      setIsSubmitting(false);
    }
  };

  // focus the phone field when the panel opens
  useEffect(() => {
    if (isOpen && !isSent) {
      const timer = setTimeout(() => inputRef.current?.focus(), 250);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [isOpen, isSent]);

  const copy = texts[mode];

  return (
    <div
      className={[
        "callback-widget",
        isOpen && "callback-widget--open",
        isQuizOpen && "callback-widget--hidden",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div
        className="callback-widget__panel"
        role="dialog"
        aria-labelledby="callback-widget-title"
        aria-hidden={!isOpen}
      >
        <button
          type="button"
          className="callback-widget__close"
          onClick={() => setIsOpen(false)}
          aria-label="Close"
          tabIndex={isOpen ? 0 : -1}
        >
          <img src="/close-x.svg" alt="" aria-hidden="true" />
        </button>

        {isSent ? (
          <div className="callback-widget__success">
            <p className="callback-widget__title" id="callback-widget-title">
              Thank you!
            </p>
            <p className="callback-widget__text">
              We’ll call you within 15 minutes.
            </p>
          </div>
        ) : (
          <>
            <p className="callback-widget__title" id="callback-widget-title">
              {copy.title}
            </p>
            <p className="callback-widget__text">{copy.text}</p>

            <form
              className="callback-widget__form"
              onSubmit={handleSubmit}
              noValidate
            >
              <input
                type="text"
                name="company"
                value={company}
                onChange={(event) => setCompany(event.target.value)}
                className="callback-widget__honeypot"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <input
                ref={inputRef}
                type="tel"
                name="phone"
                className="callback-widget__input"
                placeholder="(404) 000-0000"
                value={phone}
                onChange={handleChange}
                autoComplete="tel"
                inputMode="tel"
                aria-label="Your phone number"
                aria-invalid={Boolean(error)}
                tabIndex={isOpen ? 0 : -1}
              />

              {error && <p className="callback-widget__error">{error}</p>}

              <button
                type="submit"
                className="callback-widget__submit"
                disabled={isSubmitting}
                tabIndex={isOpen ? 0 : -1}
              >
                {isSubmitting ? "Sending..." : "Call me back"}
              </button>
            </form>
          </>
        )}
      </div>

      <button
        type="button"
        className="callback-widget__button"
        onClick={handleToggle}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close callback form" : "Request a callback"}
      >
        <img
          src={isOpen ? "/close-x.svg" : "/icons/phone-white.svg"}
          alt=""
          aria-hidden="true"
          className="callback-widget__icon"
        />
      </button>
    </div>
  );
}

export default CallbackWidget;
