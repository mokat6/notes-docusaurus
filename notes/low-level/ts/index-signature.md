# Index Signature

```ts
interface Cat {
  name: string;
  age: string;
}

type props = Record<string, string | undefined>;
function bb({ name, age }: props) {
  console.log("name is " + name + ", age is " + age);
}

const cat1: Cat = { name: "Fluffball", age: "6" };

const cat2 = { name: "Fluffball", age: "6" };

bb(cat1); // ❌ error
bb(cat2); // ✅ works
```

And Cat does NOT have an index signature.  
Different contract, at type level. No guarantee random key a string. Even when `undefined` in Record.

Index signature - TS thing, not in JS. Nothing to do with iterators.

```ts
type Dictionary = {
  [key: string]: string;
};
```

this is the index signature

This means:  
cat.name → allowed  
cat.age → allowed  
cat["random"] → ❌ error in TypeScript

Index signature is about:  
Bracket property access (obj[someKey])

Without Index Signature (Structured Object)

---

```ts
type Translations = Record<string, string>;
// is syntactic sugar for
type Translations = {
  [key: string]: string;
};
```

# Very Important Distinction

Structured object:

```js
{
  name: string;
  age: string;
}
```

Dictionary object:

```ts
{
  [key: string]: string;
}
```

They are fundamentally different in TypeScript.

:::tip
Structured object:  
`{ name: string; age: string }`  
Means:  
Only these keys are legal.  
:::

:::tip
Dictionary:  
`{ [key: string]: string }`  
Means:  
Any key is legal.  
:::

Object typed with index signature is lying. The value is not always string, could be undefined. if you access

```ts
const val = dict[key];
if (val !== undefined) val.toUpperCase();
```

check of if not undefined

---

structured vs dynamic. Structured object.  
index signature objects are for dynamic, dictionary-like objects
