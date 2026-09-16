# Arabic for Humanitarians

An Arabic learning workbook with practical humanitarian lessons, Arabic foundations, exercises and quizzes. Audio is intentionally omitted.

## Open in Cursor

Open this folder in Cursor, then open `index.html` in a browser. Keep `qaida-lessons.js` beside `index.html`. Qaida lesson markup and learning logic, from Lesson 1 onward, live in `qaida-lessons.js`. Lessons are rendered as clean Arabic text with reading practice and quizzes; no workbook pictures are required. Lesson 7 includes all three standing vowels on every letter from Alif to Yaa. The older lesson script files are retained as backups and are not loaded by the app.

Internet access is needed for Google Fonts, Tailwind CSS and Font Awesome. No build or installation is required.

## Qaida learning journey

The Qaida has 17 lessons grouped into six stages. Its overview offers a resume button, lesson progress and a revision list. Every lesson follows Understand → Reading Sheet → Practice → Quiz. Workbook boxes remain boxes; continuous passages remain unboxed Arabic rows. Select a cell or a word in a row to see the written reading, an explanation and, where useful, a letter breakdown. Lesson 2 also retains the alphabet's positional shapes from Alif to Yāʾ.

Progress and revision items are stored in this browser on this device; they do not synchronise across devices. A perfect first-attempt reading check enables lesson completion, while mistaken items are saved for revision. Lessons remain freely accessible. English readings are written decoding aids, not recordings or complete connected tajweed models. Audio and workbook images are omitted. Page 33 is skipped as requested. Practical Arabic stays in its separate course section.

Run `node verify-qaida.cjs` and `node verify-journey.cjs` to check lesson data and shared learning interactions. These checks exercise app startup and learning flows using a simulated document; they do not replace a visual browser review.

## Upload to GitHub

1. Create an empty repository on GitHub.
2. Select **Add file → Upload files**.
3. Upload `index.html`, `qaida-lessons.js` and `README.md`, then commit.
4. To publish the app, open **Settings → Pages**, select **Deploy from a branch**, choose `main` and `/ (root)`, and save.

The Pages address will appear in that settings page when deployment finishes. Upload the extracted files, not the ZIP itself.
