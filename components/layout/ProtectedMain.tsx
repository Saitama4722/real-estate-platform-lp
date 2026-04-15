"use client";

import { useRef } from "react";
import { useContentProtection } from "@/lib/useContentProtection";

/**
 * ProtectedMain
 *
 * Client wrapper that applies the JS copy-protection hook to the landing's
 * <main> area. Form fields, phone links, and buttons remain fully usable
 * because the hook explicitly exempts input / textarea / select / contenteditable.
 *
 * This is a narrow, landing-scoped wrapper — it does NOT affect other routes.
 */
export default function ProtectedMain({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  useContentProtection(ref);

  return (
    <main ref={ref} className="protected-content">
      {children}
    </main>
  );
}
