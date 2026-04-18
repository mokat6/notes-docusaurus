# SSE - protocol with strict format

```js
res.write(`data: hello\n\n`);
```

starts with "data"  
ends with "\n\n" -- event boundary. Dispatch it to the client

```js
res.write(`lol`);
```

Browser sees lolololol. Browser doesn't dispatch an event. Not valid SSE → ignored by onmessage
Browser keeps buffering → never emits an event

✅ Each line starts with a field:

- data: → actual payload
- event: → custom event name
- id: → event ID
- retry: → reconnect delay

```js
res.write("data: hello");
```

→ Missing `\n\n` browser thinks, event not finishet yet, I'll wait.

```js
res.write("data: hello\n\n");
```

Got full event → fire onmessage

---

`data: { ... }  `
👉 this is a default event.  
It does NOT have an explicit name, but internally it is treated as:  
event: message
