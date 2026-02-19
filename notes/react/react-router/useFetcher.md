# useFetcher

Loader - on component mount. Action - on form submit. But what if I want to ...  
run loader or action function programically, use useFetcher.

```jsx
const fetcher = useFetcher();

const canAlsoUseLocation = useLocation();

useEffect(() => {
  setTimeout(() => {
    fetcher.load("/admin/manage/user/1"); // does not work without path
    fetcher.load(canAlsoUseLocation.pathname);
  }, 2000);
}, []);
```


```js
fetcher.submit(payload, {
    method: 'post',
    action: location.pathname
})

```

`<Form>` will redirect to action url on submit
`<fetcher.Form>` will not redirect