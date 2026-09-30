// GA4 helpers. gtag itself is loaded in index.html.
// Every call is safe: if gtag is blocked (adblock, local dev) nothing breaks.

export function trackEvent(name, params = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", name, {
    page_path: window.location.pathname,
    ...params,
  });
}

// One listener for every tel: link on the site (header, hero, footer,
// buttons, quiz). link_location = BEM block of the link, e.g. "header", "hero".
export function initPhoneClickTracking() {
  document.addEventListener("click", (event) => {
    const link = event.target.closest?.('a[href^="tel:"]');
    if (!link) return;

    const block =
      [...link.classList]
        .find((cls) => !cls.startsWith("button"))
        ?.split("__")[0] || "unknown";

    trackEvent("click_phone", {
      link_location: block,
      phone_number: link.getAttribute("href").replace("tel:", ""),
    });
  });
}
