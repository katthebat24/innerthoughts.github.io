# Kat Garland's website

Live at https://katthebat24.github.io/innerthoughts.github.io/

## Editing without code

Go to https://app.pagescms.org, sign in with GitHub, and open this repository. You'll see:

- **Blog posts:** write, edit or delete posts.
- **About me & page text:** name, intro, photo, bio, quick facts, banner words and social links.
- **Projects:** add projects with a title, status, description, tags, link and image.

Click **Save** and the live site updates a minute or two later.

## How the site is built

GitHub Pages builds the site with Jekyll.

- `_data/site.yml`: page text, facts and social links
- `_data/projects.yml`: projects
- `_posts/`: blog posts, one file each
- `images/`: photos
- `index.html`, `_layouts/`, `_includes/`: page templates
- `style.css`: colors, fonts and layout
- `.pages.yml`: settings for the Pages CMS editor

If the repository is renamed to `katthebat24.github.io`, set `baseurl: ""` in `_config.yml`, change the media `output` in `.pages.yml` to `/images`, and change `photo` in `_data/site.yml` to `/images/me.jpg`.
