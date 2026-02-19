when you set them, the actually url gets appended when the new loader runs after that  
if loader is slow, with awaits, then you see delay before you see the stuff in url bar. But the loader has access to it.

# useSearchParams()

https://mokat6.github.io/rr7_docusaurus/search-params

```js
const Child1 = () => {
  const [search, setSearch] = useSearchParams();
  console.log("child 1 -- renders");
  return <div>Child1</div>;
};

const Child2 = ({ searchParams }) => {
  console.log("child 2 -- re-r");
  return <div>Child2 - {JSON.stringify(searchParams.toString())}</div>;
};
```

When child does `useSearchParams()` it gets re-rendered when

- search params change, from parent or sth
- parent or anywhere uses fetcher.load('path')

```js
const [search, setSearch] = useSearchParams();
```

the search object is a stable reference, that is if values don't change. You can use `search` in dependency array, pass to memo'ed child components.

# setting search params

You can mutate search, when settings setSearch. okay.
