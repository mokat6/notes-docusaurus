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

push to origin, Github Actions deploys from srouce `GitHub Actions`,  
and not from a branch. If it was from a branch, then  
`npm run serve` would work. It pushes static built assets to gh-pages branch. But it is not serving right now.
