3 states

- pending, OG
- fulfilled, resolve(value) called
- rejected, reject(errorMsg?) called

you can chain `.then`s

```js
fetchUser()
  .then((user) => fetchPostsBy(user.id))
  .then((posts) => filterInteresting(posts))
  .then((filtered) => console.log(filtered))
  .catch((err) => console.error("Something failed:", err));
```

each then returns a promise. if you return a promise yourself, like return value of a function call, then it is awaited.
.then() always returns a new promise — even if you return a plain value.

.catch() handles any rejection or thrown error that happens in the chain before it — including both the original promise executor and any .then() callbacks.

setTimeout returns a number, and it is callback based. You can make it promise based

```js
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
```

An async function always returns a promise.  
An async function starts execution synchronously, until it hits the first "await" then it stops and returns a pending promise.

```js
const assFunc = async () => {
  console.log("one");
  await sleep(666);
  console.log("two");
  const bb = await 1;
  // const cc = await 1;
};
```

# async vs .then

inside an async function, each `await` corresponds to one chain link of `.then`

```js
  const sleep = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

  const workFromHome = async () => {
    console.log("one");
    await sleep(5000);
    console.log("two");
    const bb = await 1;
    const cc = await 1;
    console.log("cc is ", cc);
    return "lol no more";
  };
```

same as

```js
const workFromHomeThenFlat = () => {
  console.log("one");

  return sleep(5000)
    .then(() => {
      console.log("two");
      return 1;
    })
    .then((bb) => 1)
    .then((cc) => {
      console.log("cc is", cc);
      return "lol no more";
    });
};
```

All async functions return a promise. But a function doesn't have to be marked with `async` to return a promise

```js
const f1 = async () => 42; // returns Promise<42>
const f2 = () => Promise.resolve(42); // same thing
```

`.then` and Promises were first introduced in ES2015 (ES6)  
`async await` is just syntactic sugar, introduced in ES2017, ES8, 2017

# React

In React you don't really care about the return value of your `async` function. You just setState() in the async function and it returns Promise resolved undefined.

# Local variables

if you declare local variable in a `.then` block

```js
.then((x) => {
    const cc = 34;
    return x.json()
})
.then()
```

It is not gonna be available in the second `.then` block

You can define `let cc` in the main function.  
You can use `.then` syntax, but nested, not flattened, then works.  
You can just use async function, then it just works.
