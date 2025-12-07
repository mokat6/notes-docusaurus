# Component cleanup

Cleanup on component unmount. In useEffect return statement.

```tsx
<div onScrol={() => {}}>
```

Synthetic event. Don't need to clean up. React does clean up automatically for these.

# need

setTimeout, setInterval, subscriptions, event listeners (when manually added)

Subscriptions

- WebSocket connections
- Data streams (RxJS, GraphQL subscriptions)
