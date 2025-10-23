# Fetch

It returns a Promise that resolves to a Response object.
It replaces older XMLHttpRequest (XHR), providing a cleaner, promise-based API.

```js
fetch(url, options)
  .then((response) => response.json()) // parse JSON
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```

options = optional object (method, headers, body, etc.).  
fff

```js
fetch("https://api.example.com/data")
  .then((res) => {
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    return res.json();
  })
  .then((data) => console.log(data))
  .catch((err) => console.error("Fetch error:", err));
```

- res.ok → boolean (true if status is 200–299).
- res.status → HTTP status code.
- res.json() → parses the body as JSON.
- res.text() → gets raw text.
- res.blob() → for images, files, etc.

```js
async function getData() {
  try {
    const res = await fetch("https://api.example.com/data");
    if (!res.ok) throw new Error(`HTTP error! ${res.status}`);
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error("Fetch error:", err);
  }
}

getData();
```

```js
const payload = { name: "Alice", age: 25 };

fetch("https://api.example.com/users", {
  method: "POST", // GET, POST, PUT, DELETE, PATCH
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(payload), // must stringify JS objects
})
  .then((res) => {
    console.log(res.headers.get("Content-Type"));
    return res.json();
  })
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
```

# Timeout, retry patterns

Timeout + retry patterns are common for production code.

Retry

```js
async function fetchWithRetry(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(res.status);
      return await res.json();
    } catch (err) {
      if (i === retries - 1) throw err;
    }
  }
}
```

Timeout

```js
const controller = new AbortController();
const signal = controller.signal;

setTimeout(() => controller.abort(), 5000); // cancel after 5s

fetch("https://api.example.com/data", { signal })
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => {
    if (err.name === "AbortError") console.log("Request timed out");
    else console.error(err);
  });
```
