# v0 Instructions — Internationalization (i18n)

This project uses a custom i18n system. **All user-visible text must be wrapped in the `t()` function.**

## Quick reference

```tsx
"use client"

import { useTranslation } from "@/lib/i18n"

export function MyComponent() {
  const { t, link } = useTranslation()

  return (
    <section>
      <h1>{t("Your English heading here")}</h1>
      <p>{t("Your paragraph text here")}</p>
      <a href={link("/for-newcomers")}>{t("Learn more")}</a>
      <a href="https://app.findhaven.org">{t("Join Haven")}</a>
    </section>
  )
}
```

## Rules

1. **Every user-visible string** must use `t("English text here")`. This includes headings, paragraphs, button labels, alt text, and aria-labels.

2. **Use the English text as the key.** Do NOT use dot-notation keys like `t("hero.title")`. Write the actual English text: `t("We help refugees become independent in Canada faster.")`.

3. **Internal links** must use the `link()` helper so they include the current locale prefix:
   ```tsx
   <Link href={link("/for-newcomers")}>{t("For Newcomers")}</Link>
   ```

4. **External links** (e.g. `https://app.findhaven.org`) do NOT need `link()` — just use the URL directly.

5. **Do NOT translate** class names, component names, image paths, or code logic — only text that users see.

6. **Add `"use client"`** at the top of any component that uses `useTranslation()`.

7. **After adding new text**, add the same English key to each translation file in `/messages/` (fr.json, ar.json, uk.json, es.json, pt.json) with the translated value.

## Files

| File | Purpose |
|------|---------|
| `lib/i18n.tsx` | `useTranslation` hook, `TranslationProvider` (client-only) |
| `lib/i18n-config.ts` | Locale constants and helpers (Edge/server-compatible) |
| `lib/get-dictionary.ts` | Loads the right JSON dictionary for each locale |
| `messages/fr.json` | French translations |
| `messages/ar.json` | Arabic translations |
| `messages/uk.json` | Ukrainian translations |
| `messages/es.json` | Spanish translations |
| `messages/pt.json` | Portuguese translations |
| `components/language-switcher.tsx` | Globe button for switching languages |

## Supported locales

`en` (default), `fr`, `ar` (RTL), `uk`, `es`, `pt`
