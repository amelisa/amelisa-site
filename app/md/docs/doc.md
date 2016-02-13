# Doc

Amelisa is document-oriented, it means that document is the smallest entity that can be fetched or subscribed. Documents are unique by collection and `_id`. Documents can be treated as scoped models and be worked directly.

> `doc = model.doc(collectionName, docId)`
> * `collectionName` Name of collection
> * `docId` Document id
> * `doc` Returns document

> `await doc.subscribe()`
> * Equal to `model.subscribe(doc)`. Fills doc with data and sync it to database

> `await doc.fetch()`
> * Equal to `model.fetch(doc)`. Fills doc with data

> `result = doc.get([field])`
> * `field` *(optional)*  Field of object to get. Not supplying a field will return whole doc snapshot
> * `result` Returns doc's snapshot

> `await doc.set(field, value)`
> * `field` Field of object to set
> * `value` Value to assign

> `await doc.del([field])`
> * `field` *(optional)* Field of object to del. Not supplying a field will delete whole doc

```js
let $user = model.doc('users', '1')

await $user.fetch()

let name = $user.get('name')
$user.set('age', 19)
```

Array of Docs is [Query](/docs/query).
