# Project Rules

## Copy-Protection Layer (added 2026-04-14)

### What was added
Frontend-only, browser-side hardening against casual text copying and image saving.
**This does NOT constitute full DRM and does NOT prevent extraction via DevTools, network inspection, or screenshots.**

### Files added / changed

| File | Change |
|------|--------|
| `lib/useContentProtection.ts` | NEW — JS event-listener hook |
| `components/layout/ProtectedMain.tsx` | NEW — client wrapper applying hook to `<main>` |
| `app/page.tsx` | `<main>` replaced with `<ProtectedMain>` |
| `app/globals.css` | `.protected-content` and `.protected-image` CSS rules added |
| `components/sections/CityCarousel.tsx` | `protected-image` class on city photo containers |
| `components/sections/PropertyCarousel.tsx` | `protected-image` class on listing photo containers |
| `components/sections/Agents.tsx` | `protected-image` class on portrait container |
| `components/sections/FeaturedProperty.tsx` | `protected-image` class on featured image panel |

### Rules / constraints

- **Do NOT remove the `.protected-content` CSS class from `<ProtectedMain>`** without also auditing all event listener cleanup in `useContentProtection.ts`.
- **Form fields are explicitly exempted.** The hook's `isFormField()` guard and the CSS `.protected-content input/textarea/select` override ensure forms remain fully usable.
- **Phone links (`href="tel:..."`) must remain unprotected** — do not apply `pointer-events: none` or `user-select: none` via inline styles to `<a href="tel:...">` elements.
- **`.protected-image` should only be applied at image container level**, not on text-containing wrappers.
- When adding new images to the landing, add the `protected-image` CSS class to their outer container.
- When adding new public text sections, they will inherit CSS protection automatically from `.protected-content` on `<main>`.
- **No watermarks.** The design must remain unchanged.

### What this protects against (casual users only)
- Text selection via mouse drag
- Copy via Ctrl+C / Cmd+C (when outside form fields)
- Save via Ctrl+S / Cmd+S (when outside form fields)
- Right-click context menu on protected areas
- Image drag-and-drop saving
- Long-press save on mobile (iOS/Android WebKit via `-webkit-touch-callout: none`)

### What this does NOT protect against
- DevTools → Network tab image URL extraction
- Screenshot tools
- View-source or page saving via browser menus
- Determined technical users
