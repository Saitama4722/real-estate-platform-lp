"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { CONSENT_EVENT, getCookieConsent, type CookieConsent } from "@/lib/cookieConsent";

/**
 * Envybox callback widget — loaded only after the visitor accepts cookies.
 */
export default function EnvyboxWidget() {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    setAllowed(getCookieConsent() === "all");
    const onChange = (e: Event) =>
      setAllowed((e as CustomEvent<CookieConsent>).detail === "all");
    window.addEventListener(CONSENT_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_EVENT, onChange);
  }, []);

  if (!allowed) return null;

  return (
    <>
      <Script
        src="https://cdn.envybox.io/widget/cbk.js?wcb_code=fd4c8cb90c73babb288d0fe0bd5889b1"
        strategy="afterInteractive"
      />
      <link rel="stylesheet" href="https://cdn.envybox.io/widget/cbk.css" />
    </>
  );
}
