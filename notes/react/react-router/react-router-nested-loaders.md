# Nested loader run order

:::tip
They all load in parallel and not sequentially!
:::

App structure

```
layout/
├── home/
│   ├── pane1

```

### React Router 7 data

```
Layout loader start
Home loader start
Pane1 loader start

Layout loader end
Pane1 loader end
Home loader end

Layout component start
Home component start
Pane1 component start

Pane1 useEffect --- mounted
Home useEffect --- mounted
Layout useEffect --- mounted
```

### React Router 6 data

same

### React Router 7 Framework

same
