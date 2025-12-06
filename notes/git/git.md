# useful git

delete all branches that include `bugfix`

```bash
git branch | grep "bugfix" | xargs git branch -D
```

dry run.... ( -v means exclude)

```bash
git branch | grep -v "develop"
git branch | grep -v "develop" | xargs git branch -D
```
