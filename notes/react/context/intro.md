Problem it solves - prop drilling  
Like a global variable... could be less than global, scoped to one part of the app where context is wrapped

context is the thing that allows prop teleportation system. no drilling.  
provider is just a wrapper that holds the state. Without a provider, you would simply hold the state in the parent, the one that renders `<ThemeContext.Provider  value={contextValue}>`. This is rawdawgging. No fancy provider abstraction.

Provider is just an abstraction wrapper that holds the state. Renders the actual `ThemeContext.provider` + `{children}`.
Before this fancy abstraction pattern was populiarized, you just use it directly in the Parent, and hold the state in the parent too.

Then consume the value using `ThemeContext.Consumer`  
now we don't see `ThemeContext.Provider` because it is in the "provider abstraction" wrapper, and we dont see the consumer, because it is gone... we use useContextHook now

# Barebone

you have
`const ThemeContext = React.createContext("def value")`
the returned object has `.Provider` and `.Consumer`
`<ThemeContext.Provider value="lol">...` wraps at the Parent level. Has been wrapped in an abstraction wrapper. The abstraction holds the state "lol" and setValue. renders the `.Provider` and `{children}`
`<ThemeContext.Consumer>` eats the value at the child component level. Has been replaced by useTh3m3 hook
Provider is a component (functional, or even class component) that holds state, renders `<.Provider> {children}</.Provider>`

# consumer hook abstraction

barebones OG

```js
const contextObj = useContext(ThemeContext);
```

Abstraction. A second higher lvl hook. Hook that abstracts the OG hook.

```js
export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}
```

Rationale, why need it? not much.... just...

1. single import, instead of two (useContext, and the actual ThemeContext instance)
2. instead of const context = useContext(ThemeContext); we just do - const context = useTheme()
3. also probably better discriptive naming.
4. Does error checking, if it is undefined, means you've used it wrong, outside of the <instance.Provider>
