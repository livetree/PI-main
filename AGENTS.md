<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

## Project Rules
- **Always commit changes**: Every significant change must be followed by a git commit to the repository.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:loop -->
# The loop

`LOOP_SYSTEM.md` is the operating manual for this repo. Read it top to bottom
before touching anything — sections 3 (working agreements) and 4 (ponytail) are
standing rules, not advice.

What that means here, concretely:

```bash
npm run check   # assert-based guards, no framework — must pass
npx eslint      # must be zero ERRORS; two <img> warnings are known and named below
npm run build   # must succeed before any claim that something works
```

- **Exercise it, do not read it.** Drive the real page before saying it works.
  The preview tab renders hidden, and framer-motion's `AnimatePresence` exit
  animations are `requestAnimationFrame`-driven, so a step transition (diagnostic
  start → questions → results) will look frozen until a screenshot forces frames.
  Take screenshots to pump frames; a stalled transition there is the harness, not
  the site.
- **Leave the guard behind.** New non-trivial logic adds an assertion to
  `check.mjs` whose message names what broke.
- **Known and accepted:** two `@next/next/no-img-element` warnings (`/about`
  portraits, the navbar logo). Moving to `next/image` needs a `next.config.mjs`
  with `remotePatterns` for `prepareinternational.org`; that is a deliberate
  deferral, not an oversight.
<!-- END:loop -->
