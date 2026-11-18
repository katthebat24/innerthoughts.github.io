# My website

A personal site with projects, an about section, a blog and contact links.

## Files

- `index.html`: all the words and sections. Edit this to change what the site says.
- `style.css`: colors, fonts and layout. The colors are at the very top.
- `script.js`: project card artwork and the "Copy my email" button. Put your email on the line that starts with `const email`.

## Put it online with GitHub Pages (free)

1. Sign in at github.com, or make a free account.
2. Create a new repository. Name it `YOUR-USERNAME.github.io` to get the address `https://YOUR-USERNAME.github.io`, and make it **Public**.
3. Click **Add file → Upload files**, drag in `index.html`, `style.css` and `script.js`, then click **Commit changes**.
4. Go to **Settings → Pages**. Under "Build and deployment", choose **Deploy from a branch**, pick the `main` branch and the `/ (root)` folder, then click **Save**.
5. After a minute or two, your site is live at `https://YOUR-USERNAME.github.io`.

To update the site later, upload the changed files again in the same repository.

## Common edits

- **Your name:** search `index.html` for "Your Name" (it appears in a few places).
- **Add a project:** copy one `<article class="proj">…</article>` block and change the text. Give the new canvas the next number, like `data-art="3"`.
- **Add a blog post:** copy one `<details class="post">…</details>` block and put it at the top of the list. Only the newest post should keep the word `open`.
- **Links:** change the GitHub, Instagram and LinkedIn addresses near the bottom of `index.html`.
- **Photo:** replace `<div class="face">your photo<br>goes here</div>` with `<img class="face" src="me.jpg" alt="Photo of Your Name">`, upload `me.jpg` alongside the other files, and add `object-fit: cover; padding: 0;` to the `.portrait .face` rule in `style.css`.
