# Creative Run Review

A dependency-free browser demo for comparing fictional AI image attempts and recording a review. The included brief, images, model labels, values, and reviews are synthetic examples.

## Run locally

```sh
python3 -m http.server 4173
```

Open <http://localhost:4173/>. The app keeps files and entries in browser memory; nothing is uploaded or saved. Export your review before leaving.

Run the logic check with:

```sh
node self-check.mjs
```

## Publish with GitHub Pages

In the repository, open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save. GitHub Pages will serve the root `index.html`.
