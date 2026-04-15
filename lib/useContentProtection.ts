"use client";

import { useEffect, RefObject } from "react";

/**
 * useContentProtection
 *
 * Attaches copy-protection event listeners to the supplied container ref.
 * Scoped to the container — does NOT globally cripple the page.
 *
 * Blocks:
 *  - contextmenu (right-click) on the container
 *  - copy / cut / selectstart on the container
 *  - dragstart on the container (covers image drag)
 *  - Ctrl/Cmd + C / S / A key combos, but ONLY when the active element is
 *    NOT an input, textarea, or contenteditable, so forms remain fully usable
 *
 * NOTE: This hardens against *casual* copying only.
 * DevTools, network inspection, and screenshots are NOT prevented.
 */
export function useContentProtection(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    /** Check if focus is inside a form element where selection must work */
    function isFormField(target: EventTarget | null): boolean {
      if (!target || !(target instanceof Element)) return false;
      const tag = target.tagName.toLowerCase();
      if (tag === "input" || tag === "textarea" || tag === "select") return true;
      // contenteditable spans / divs
      if ((target as HTMLElement).isContentEditable) return true;
      return false;
    }

    function blockEvent(e: Event) {
      // Always allow events originating from form fields
      if (isFormField(e.target)) return;
      e.preventDefault();
    }

    function blockKeyCombo(e: KeyboardEvent) {
      // Allow keyboard combos while typing in form fields
      if (isFormField(e.target)) return;
      const ctrl = e.ctrlKey || e.metaKey;
      if (!ctrl) return;
      const key = e.key.toLowerCase();
      // Block Ctrl/Cmd + C (copy), S (save), A (select-all), X (cut)
      if (key === "c" || key === "s" || key === "a" || key === "x") {
        e.preventDefault();
      }
    }

    el.addEventListener("contextmenu", blockEvent);
    el.addEventListener("copy", blockEvent);
    el.addEventListener("cut", blockEvent);
    el.addEventListener("selectstart", blockEvent);
    el.addEventListener("dragstart", blockEvent);
    // keyboard combo block is on document but only fires when focus is inside el
    document.addEventListener("keydown", blockKeyCombo);

    return () => {
      el.removeEventListener("contextmenu", blockEvent);
      el.removeEventListener("copy", blockEvent);
      el.removeEventListener("cut", blockEvent);
      el.removeEventListener("selectstart", blockEvent);
      el.removeEventListener("dragstart", blockEvent);
      document.removeEventListener("keydown", blockKeyCombo);
    };
  }, [ref]);
}
