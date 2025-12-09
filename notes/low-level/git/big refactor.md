only commits on refactor, not on master

```shell
# only commits on refactor, not on master
git log master..refactor --oneline

# only commits on master, not on refactor
git log refactor..master --oneline
```

# strategy with cherry-pick

```shell
git switch master
git cherry-pick your commits from refactor1
```

and you're done.

Don't cherry-pick from master into feature1 if there's conflicts. Solving conflicts is like adding new code. No shared history. cherry-picks change commit hash

# strategy 2

```shell
git switch feature1
git rebase master
# ... solve conflicts
```
