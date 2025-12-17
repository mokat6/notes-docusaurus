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

# alias

```shell
alias gb='current=$(git rev-parse --abbrev-ref HEAD 2>/dev/null); git for-each-ref --sort=committerdate --format="%(refname:short)|%(committerdate:relative)|%(authorname)" refs/heads | awk -F"|" -v current="$current" '"'"'{branch=$1; if(branch==current) branch="\033[31m"branch"\033[0m"; printf "\033[32m%-12s\033[0m %s \033[34m<%s>\033[0m\n", $2, branch, $3}'"'"

# alias glol from oh my zshell
# alias ggpush from oh my zshell
alias glolme="glol --author='LittleFoot'"
```
