declare global {
  interface Window {
    fbq?: any;
  }
}

export const trackEvent = (
  event: string,
  data?: any,
  options?: { eventID?: string }
) => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq('track', event, data, options);
  }
};