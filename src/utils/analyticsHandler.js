import ReactGA from "react-ga4";
import eventConfig from "../config/events.json";

/**
 * Tracks GA4 + GTM event using centralized config
 */
export const trackGA4Event = (eventId, dynamicParams = {}) => {
  const eventDefinition = eventConfig.events[eventId];

  if (!eventDefinition) {
    console.warn(`[Analytics] Unknown event ID: ${eventId}`);
    return;
  }

  const { action, category, label, description, ...staticParams } = eventDefinition;

  const finalParams = {
    ...staticParams,
    ...dynamicParams,
    event_category: category,
    event_label: label,
  };

  // ✅ Debug logs (dev only)
  if (import.meta.env.DEV) {
    console.group(`🔥 [Analytics] ${eventId}`);
    console.log("Action:", action);
    console.log("Params:", finalParams);
    console.groupEnd();
  }

  try {
    // 🔥 GTM (MOST IMPORTANT)
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: action, // 👈 important (NOT eventId)
      ...finalParams,
    });

    // 🔥 GA4 via react-ga4
    ReactGA.event(action, finalParams);

  } catch (error) {
    console.error("❌ Tracking Error:", error);
  }
};

/**
 * Hook for usage in components
 */
export const useAnalytics = () => {
  return {
    track: trackGA4Event,
  };
};