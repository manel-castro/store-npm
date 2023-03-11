Implements a very basic store with data accessors with a minimum bundle size of less than 5kb. It mainly implements unicity for a given ID.

Work in progress:

- Support for non-unicity

Options:

- Namespace

Components to use:

```TS
setData({
  id,
  data,
  options = { leading: false, namespace: "" },
})

getData({ id })

deleteData({ id })
```

You need to provide a id parameter for store management.

All the library includes type declarations, but functions are self-explanatory for plain JS.
