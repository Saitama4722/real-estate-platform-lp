// Cookie consent state, kept in the visitor's browser.
// "all"       — visitor accepted analytics / marketing services (Envybox widget etc.)
// "necessary" — only technically necessary cookies; third-party widgets stay off

export type CookieConsent = "all" | "necessary";

const STORAGE_KEY = "cookie-consent-v1";
export const CONSENT_EVENT = "cookie-consent-change";

export function getCookieConsent(): CookieConsent | null {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === "all" || value === "necessary" ? value : null;
  } catch {
    return null;
  }
}

export function setCookieConsent(value: CookieConsent) {
  try {
    window.localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // Storage blocked (private mode etc.) — choice still applies for this page view
  }
  window.dispatchEvent(new CustomEvent<CookieConsent>(CONSENT_EVENT, { detail: value }));
}
