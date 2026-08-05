# TURME_website

Public project website for **TURME**, a senior capstone project team.

It is a plain static site — hand-written HTML, CSS and JavaScript, no build step and
no framework. Open `index.html` in a browser to view it locally.

```
index.html          the site (single page, anchored sections)
styles.css          all styling; design tokens live in :root
main.js             missing-image fallback + current-section nav highlight
.nojekyll           tells GitHub Pages to serve the files as-is
CONTENT-TODO.md     checklist of every placeholder still to be filled in
assets/img/         diagrams and UI designs
assets/img/team/    member-1.png … member-5.png (portrait photos)
web_sitesi/BRIEF.md the specification this site was built from
```

## Deploy to GitHub Pages

1. Commit and push to `main`.
2. GitHub repo → **Settings → Pages** → Source: *Deploy from a branch* → Branch `main` /
   `/ (root)` → **Save**.
3. Wait about a minute, open <https://tahatvln01.github.io/TURME_website/> and confirm the
   HTTPS padlock is shown.
4. Tick **Enforce HTTPS**.

All paths in the site are relative, so it works from the `/TURME_website/` sub-path.
Do not change them to root-absolute paths (`/assets/...`) — that breaks the deployed site.

## Update the content

Every unfinished piece of content is marked in three ways: a visible `TBD` chip, an HTML
comment starting with `TODO(content)`, and — for links — a `data-todo="…"` attribute.

- Search the project for `TODO(content)` to list everything that is still pending.
- Work through [CONTENT-TODO.md](CONTENT-TODO.md); it names each placeholder, its search key
  and what to replace it with.
- After replacing a placeholder, delete its `<span class="tbd">TBD</span>` chip and the
  `TODO(content)` comment above it.

### Photos and images

Replace `assets/img/team/member-1.png` … `member-5.png` with square portraits (they are
currently five copies of `placeholder.png`, which stays in place as the master copy). Keep
the same filenames. If an image file is missing the layout still holds: the slot shows an
"Image coming soon" block instead.

Finally, update the date in the footer of `index.html` whenever the content changes.
