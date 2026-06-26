# UI/UX Design Rules

## Web API Compatibility
- When using WebGL, Canvas 2D, or any GPU-accelerated API, ALWAYS implement a premium-quality CSS fallback. Test the fallback path independently.
- When sharing data between `<script>` tags using `const`/`let`, remember these do NOT attach to `window`. Use `typeof` checks or explicit `window.X = ...` assignment.

## Animation & Motion
- Micro-interaction duration: 150–300ms. Never exceed 500ms for UI transitions.
- Only animate `transform` and `opacity` for performance. Never animate layout properties (width, height, top, left).
- Use `ease-out` for elements entering the viewport, `ease-in` for exiting.
- Always respect `prefers-reduced-motion: reduce` with a `@media` query that disables or simplifies animations.

## Accessibility & UX
- All touch targets must be minimum 44×44px with at least 8px spacing between them.
- Maintain minimum 4.5:1 color contrast ratio for all text.
- Never remove `:focus` outlines without providing a visible alternative (e.g., `focus-visible` ring).
- Reserve space for images/async content to prevent layout shift (use `aspect-ratio` or explicit dimensions).
- Limit text container width to 65–75ch for optimal readability.

## Layout
- Define a consistent z-index scale (10, 20, 30, 50, 100). Never use arbitrary values like 9999.
- Use `dvh` or `svh` instead of `100vh` on mobile to account for browser chrome.
- Always show loading feedback (skeleton screens, spinners) during async operations.
