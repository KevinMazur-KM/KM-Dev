# Writing publishing guide

## Create an article

1. Copy `templates/writing-article.md` to `src/content/writing/<slug>.md`.
2. Use a lowercase, hyphenated filename. The filename becomes the public URL slug.
3. Complete every front-matter field and replace the example article body.
4. Choose an approved visual from `public/graphics/writing/CATALOG.md`.
5. Set `draft: false` only when the article is approved for publication.
6. Run `npm run build` before committing.

Example:

```text
src/content/writing/ai-is-an-organizational-problem.md
```

This produces:

```text
/writing/ai-is-an-organizational-problem/
```

## Front matter

| Field | Required | Rules |
| --- | --- | --- |
| `title` | Yes | Full public article title. Do not repeat it as an H1 in the body. |
| `date` | Yes | ISO date in `YYYY-MM-DD` format. |
| `description` | Yes | Concise plain-text summary for cards and metadata. |
| `topics` | Yes | YAML list of relevant topic labels. |
| `featured` | Yes | Reserved for future curated selections. The homepage automatically shows the three newest published articles regardless of this value. |
| `draft` | Yes | Drafts are excluded from indexes and generated article routes. |
| `visual.family` | Yes | One of the approved visual families. |
| `visual.image` | Yes | Exact image ID from the visual catalog; its prefix must match the family. |

## Content conventions

- Start with normal paragraph text.
- Use `##` for main sections and `###` for subsections.
- Do not add an H1; the page template renders the title.
- Use Markdown lists, blockquotes, emphasis, and descriptive links where useful.
- Do not include raw layout HTML or presentation-specific styling.
- Do not publish confidential information, private URLs, credentials, or internal system details.

The Astro content loader discovers valid Markdown files automatically. Publishing a new article does not require a component, route, or configuration change.
