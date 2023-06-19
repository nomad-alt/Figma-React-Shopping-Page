export const sendEvent = (eventName, eventParameters = {}) => {
  window.gtag("event", eventName, eventParameters);
};
