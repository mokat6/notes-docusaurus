https://www.youtube.com/watch?v=EGuYKL8puRI

useRouteLoaderData
useMatcher...

Make a custom hook, which returns user data that is loaded by the top level root level loader.

```js
const user = useUserLoaderData();
```

```js
export const useUserLoaderData = () => {
  const data = useRouterLoaderData < typeof loader > "routes/_layout.users";
  if (!data) {
    throw new Error("useUserLoaderDatyat must be used inside a route that is a child of _l;ayout.users");
  }
  return data;
};
```
