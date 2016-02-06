# Doc

Amelisa is document-oriented, it means that document is the smallest entity that can be fetched, subscribed or created. Documents are unique by collection and `_id`

> `doc = model.doc(collectionName, docId)`
> * `doc` Return document
> * `collectionName` Name of collection
> * `docId` Document id

Documents can be manipulated directly. There are `doc.subscribe`, `doc.fetch`, `doc.get`, `doc.set`, `doc.del` methods similar to model equivalents.

```js
let $user = model.doc('users', '1')

await $user.fetch()

let name = $user.get('name')
await $user.set('age', 19)
```

Array of Docs is [Query](/docs/query).
