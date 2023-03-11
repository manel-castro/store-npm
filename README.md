Implements a basic store for callbacks management with a minimum bundle size of less than 5kb.

Components to use:

```TS
getCallback({
  id,
  callback,
  options = { leading: false },
})

setCallback({ id })

deleteCallback({ id })
```

You need to provide a id parameter for store management.

All the library includes type declarations, but functions are self-explanatory for plain JS.
