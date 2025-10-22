## Github pages

[https://mokat6.github.io/notes-docusaurus/](https://mokat6.github.io/notes-docusaurus/)

## Search

```
npm build
npm run serve
```

Local search  
Search works in production, not in dev.

## Deployment

Using SSH:

```bash
USE_SSH=true npm run deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```
