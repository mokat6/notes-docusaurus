Remove a deep commit

1.

```shell
git rebase -i HEAD~5
```

and then drop like number 3. Gotcha - it rewrites history of the ones not dropped.

---

2.

```shell
git revert idhashjf23ijf2i323f
```

it creates a new commit with opposite adds, to cancel each other out.
