# Lookup tables

```ts
enum Role {
  Admin = "admin",
  User = "user",
}

const roleNames: Record<Role, string> = {
  [Role.Admin]: "Administrator",
  [Role.User]: "Normal User",
};

// safe lookup
roleNames[Role.Admin]; // "Administrator"
```

TypeScript guarantees that every Role maps to a string.

# Dynamic dictionaries

```ts
const translations: Record<string, string> = {
  en: "Hello",
  lt: "Labas",
  fr: "Bonjour",
};

// dynamically access
function greet(lang: string) {
  return translations[lang]; // TypeScript knows: string
}
```

Here, you don’t know all possible keys ahead of time — so a Record is perfect.
