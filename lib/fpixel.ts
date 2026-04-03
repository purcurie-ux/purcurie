export const trackEvent = (event: string, data = {}) => {
  if (typeof window !== "undefined" && (window as any).fbq) {
    (window as any).fbq('track', event, data);
  }
};