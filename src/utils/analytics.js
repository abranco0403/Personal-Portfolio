export const trackEvent = (name, params = {}) => {
  if (typeof window === "undefined") return;

  // GA4 gtag
  if (typeof window.gtag === "function") {
    window.gtag("event", name, params);
    return;
  }

  // Optional fallback: log in dev so you know it fired
  if (process.env.NODE_ENV === "development") {
    // eslint-disable-next-line no-console
    console.log("[trackEvent]", name, params);
  }
};
