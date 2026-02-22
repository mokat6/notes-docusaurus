# What determines if a URL needs a trailing slash?

Trailing slash = treated as a directory by the server.  
No trailing slash = treated as a file or resource.

# Historical/Old-school view

https://example.com/foo/ → folder → server looks for /foo/index.html.  
https://example.com/foo → file → server looks for /foo.

Browsers still respect this: a URL without a trailing slash that’s a directory usually triggers a 301 redirect to add /.

Use server/SPA conventions:  
Routes ending in IDs, hashes, or single resources → “file-like” → no slash.  
Routes representing collections, folders, or sections → “directory-like” → usually slash.  
If you want to be safe, check what the server considers canonical: visit the URL → see if it redirects → copy that URL.

# service layer

use this!

```js
const API_ROOT = "http://xxx.com/api/";
```

```
'http://xxx.com/api/?filter=big';
```

works okay, works.  
The trailing slash signals “this is a base URL you append paths to.”

---

double slashes don't work

```
https://mokat6.github.io/notes-docusaurus//clean-code/intro/
```

error not found 404.

some servers allow it though.

---

you could create a helper function

```js
function joinUrl(base, segment) {
  return `${base.replace(/\/$/, "")}/${segment.replace(/^\/?/, "")}`;
}

// Examples
joinUrl("https://mokat6.github.io/notes-docusaurus/", "clean-code/intro/");
// => https://mokat6.github.io/notes-docusaurus/clean-code/intro/
```

or just stick to convention and don't forget to be consistent.
