declare global {
  interface Window {
    /** Microsoft Clarity — yüklenince `tag` script’i tanımlar. */
    clarity?: (command: "event", eventName: string) => void;
  }
}

export const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID;

export const clarityEvent = (eventName: string) => {
  if (typeof window !== "undefined" && window.clarity) {
    window.clarity("event", eventName);
  }
};
