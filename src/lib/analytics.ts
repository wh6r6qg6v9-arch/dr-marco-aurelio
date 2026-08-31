export const GOOGLE_ANALYTICS_ID = "G-G3PGN3SRPK";
export const ANALYTICS_CONSENT_STORAGE_KEY = "cordeirocardio-analytics-consent";
export const OPEN_COOKIE_PREFERENCES_EVENT = "cordeirocardio:open-cookie-preferences";

export type AnalyticsConsent = "granted" | "denied";

type Gtag = (...args: unknown[]) => void;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: Gtag;
    __googleAnalyticsLoaded?: boolean;
    __loadGoogleAnalytics?: () => void;
  }
}

export const googleTagBootstrap = `
(function () {
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };

  window.gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
    functionality_storage: 'granted',
    security_storage: 'granted'
  });
  window.gtag('set', 'ads_data_redaction', true);

  window.__loadGoogleAnalytics = function () {
    if (window.__googleAnalyticsLoaded || document.getElementById('google-tag-script')) return;
    window.__googleAnalyticsLoaded = true;

    var script = document.createElement('script');
    script.id = 'google-tag-script';
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}';
    document.head.appendChild(script);

    window.gtag('js', new Date());
    window.gtag('config', '${GOOGLE_ANALYTICS_ID}', {
      allow_google_signals: false,
      allow_ad_personalization_signals: false
    });
  };

  try {
    if (window.localStorage.getItem('${ANALYTICS_CONSENT_STORAGE_KEY}') === 'granted') {
      window.gtag('consent', 'update', {
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
        analytics_storage: 'granted'
      });
      window.__loadGoogleAnalytics();
    }
  } catch (_) {
    // The site remains usable when browser storage is unavailable.
  }
})();
`;

export function getStoredAnalyticsConsent(): AnalyticsConsent | null {
  try {
    const value = window.localStorage.getItem(ANALYTICS_CONSENT_STORAGE_KEY);
    return value === "granted" || value === "denied" ? value : null;
  } catch {
    return null;
  }
}

export function setAnalyticsConsent(choice: AnalyticsConsent) {
  const analyticsWasLoaded = Boolean(window.__googleAnalyticsLoaded);

  try {
    window.localStorage.setItem(ANALYTICS_CONSENT_STORAGE_KEY, choice);
  } catch {
    // Consent still applies for the current page when storage is unavailable.
  }

  window.gtag?.("consent", "update", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: choice,
  });

  if (choice === "granted") {
    window.__loadGoogleAnalytics?.();
  } else {
    clearGoogleAnalyticsCookies();
  }

  window.dispatchEvent(
    new CustomEvent("cordeirocardio:analytics-consent-changed", {
      detail: choice,
    }),
  );

  if (choice === "denied" && analyticsWasLoaded) {
    window.location.reload();
  }
}

export function openCookiePreferences() {
  window.dispatchEvent(new Event(OPEN_COOKIE_PREFERENCES_EVENT));
}

function clearGoogleAnalyticsCookies() {
  const analyticsCookies = document.cookie
    .split(";")
    .map((cookie) => cookie.trim().split("=")[0])
    .filter(
      (name) => name === "_ga" || name === "_gid" || name === "_gat" || name.startsWith("_ga_"),
    );

  const hostParts = window.location.hostname.split(".");
  const domains = hostParts
    .slice(0, Math.max(1, hostParts.length - 2))
    .map((_, index) => hostParts.slice(index).join("."));

  for (const name of analyticsCookies) {
    document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
    for (const domain of domains) {
      document.cookie = `${name}=; Max-Age=0; path=/; domain=.${domain}; SameSite=Lax`;
    }
  }
}
