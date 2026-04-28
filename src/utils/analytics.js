export const trackEvent = (action, category = "Portfolio", label = "") => {
  if (window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
    });
  }
};