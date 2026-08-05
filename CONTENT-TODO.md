# CONTENT-TODO

Everything the team still has to supply. All of it is in `index.html` unless stated
otherwise. Search for `TODO(content)` to jump between the items.
After filling one in, delete its `<span class="tbd">TBD</span>` chip and its comment.

## Hero

- [ ] **Project title** — replace `Project Title TBD` in the `<h1>`.
- [ ] **One-sentence summary** — replace the `hero__lead` paragraph (max ~25 words).
- [ ] **Member names in the wordmark** — replace `Member 1` … `Member 5` in
      `.wordmark__name` with real first + last names. Keep the letters T U R M E in order.

## Project

- [ ] **The problem** — 2–3 sentences.
- [ ] **Our solution** — 2–3 sentences.
- [ ] **At a glance** — fill in `Domain`, `Status` and `Timeline` in the `.glance` list.

## Visuals

- [ ] **Figures** — the four existing images are in place. To add another, copy one
      `<figure>` block and drop the file into `assets/img/`.
- [ ] **Demo video** — replace the `panel--video` block with a link to the recorded demo.

## Team (one set per member, N = 1…5)

- [ ] **Photo** — overwrite `assets/img/team/member-N.png` with a square portrait.
      Keep the filename. `placeholder.png` stays as the master copy.
- [ ] **Name** — replace `Member N` in `.card__name`.
- [ ] **Role** — replace `Role TBD` in `.card__role`.
- [ ] **Bio** — replace the two-sentence `.card__bio` text.
- [ ] **LinkedIn** — `data-todo="linkedin-N"`: set the real profile URL and remove the
      `link-todo` class so the link stops looking disabled.

## Reports

Ten file links, all currently `href="#"`. Set each one to a direct, publicly-viewable
file link (Anyone with the link → **Viewer**) and remove the `link-todo` class.
Verify every link in a logged-out / private window.

- [ ] `data-todo="proposal-pdf"` / `proposal-docx` — Project Proposal
- [ ] `data-todo="requirements-pdf"` / `requirements-docx` — Requirements Specification
- [ ] `data-todo="design-pdf"` / `design-docx` — Design Report
- [ ] `data-todo="progress-pdf"` / `progress-docx` — Progress / Interim Report
- [ ] `data-todo="final-pdf"` / `final-docx` — Final Report
- [ ] `data-todo="drive-folder"` — shared Drive folder for the **Open Drive folder** button

## Advisor

- [ ] Replace `To be announced` with the advisor's title and full name, and update the
      muted line below it.

## Contact and footer

- [ ] `data-todo="team-email"` — replace `team@example.com` in both the `href` and the
      link text.
- [ ] **Footer date** — update `Last updated: 2026-08-05` whenever the site changes.
