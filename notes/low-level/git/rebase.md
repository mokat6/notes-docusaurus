```shell
git rebase -i master
```

it mutates the feature1 branch  
`[...masterCommits, ...feature1Commits]`

changes feature1 commit hashes, keeps timestamps. Now you have to force push to `origin feature1`

----
Kinda like 

```shell
git stash
git pull  # on master
git switch -c feature1
git stash pop
```

You're putting your changes on top.

---
origin feature vs origin/feature
```shell
git pull origin feature
# also
git pull --rebase origin feature

git fetch origin
git rebase origin/feature
```