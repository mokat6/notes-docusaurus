# Loaders

# When do laoders re-fire

1. Retrigger on param change

```shell
# navigate from
/user/1
# to
/user/1/edit
```

only `edit` loader runs.

```shell
# navigate from
/user/1/edit
# to
/user/3/edit
```

All loaders run

2. Same with search params

3. Triggers on useRevalidator

4. re-trigger on same route navigation

5. on action submission
