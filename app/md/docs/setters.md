# Setters

Models allow getting and setting to nested undefined paths. Setting such a path first sets each undefined or null parent to an empty object or empty array. Whether or not a path segment is a number determines whether the implied parent is created as an object or array.

```js
model.set('users.1.address.town', 'London')
// Logs: { users: { 1: { address: { town: 'London' }}}}
console.log(model.get())
```

All model mutators modify data and emit events synchronously. This is only safe to do, because all remote data is synchronized with CRDT, and every client will eventually see a consistent view of the same data. With a more naive approach to syncing data to the server and other clients, updates to the data would need to wait until they were confirmed successful from the server.

As well as a synchronous interface, model mutators return promise, which is resolved when the operation is confirmed from the server, which may be desired to confirm that data was saved before updating the UI in some rare cases. This promise should be used very rarely in practice, and data updates should be treated as synchronous, so that the UI responds
immediately even if a user has a high latency connection or is currently offline.

### Object

> `await model.add(collectionName, doc)`
> * `collectionName` Name of collection
> * `doc` A document to add. If the document has an `_id` property, it will be set at that value underneath the path. Otherwise, an `_id` from model.id() will be set on the object first

> `await model.set(path, value)`
> * `path` Model path to set or `[collectionName, docId, field]` array
> * `value` Value to assign

> `await model.setNull(path, value)`
> * `path` Model path to set or `[collectionName, docId, field]` array
> * `value` Value to assign only if path is null or undefined

> `await model.del(path)`
> * `path` Path to delete or `collectionName, docId, field` params or `[collectionName, docId, field]` array

### Array

> `await model.push(path, value)`
> * `path` Model path or `[collectionName, docId, field]` array
> * `value` Value to push

> `await model.unshift(path, value)`
> * `path` Model path or `[collectionName, docId, field]` array
> * `value` Value to unshift

> `await model.pop(path)`
> * `path` Model path or `[collectionName, docId, field]` array

> `await model.shift(path)`
> * `path` Model path or `[collectionName, docId, field]` array

> `await model.insert(path, index, values)`
> * `path` Model path or `[collectionName, docId, field]` array
> * `index` Position
> * `values` Values to insert

> `await model.remove(path, index, howMany)`
> * `path` Model path or `[collectionName, docId, field]` array
> * `index` Position
> * `howMany` *(optional)* Items count to remove. Defaults to 1

> `await model.move(path, from, to, howMany)`
> * `path` Model path or `[collectionName, docId, field]` array
> * `from` Position
> * `to` Destination
> * `howMany` *(optional)* Items count to move. Defaults to 1

### Boolean

> `await model.invert(path)`
> * `path` Model path or `[collectionName, docId, field]` array

### Number

> `await model.increment(path, byNumber)`
> * `path` Model path or `[collectionName, docId, field]` array
> * `byNumber` *(optional)* Number specifying amount to increment or decrement if negative. Defaults to 1

### String

> `await model.stringInsert(path, index, text)`
> * `path` Model path or `[collectionName, docId, field]` array
> * `index` Position
> * `text` String to insert

> `await model.stringRemove(path, index, howMany)`
> * `path` Model path or `[collectionName, docId, field]` array
> * `index` Position
> * `howMany` *(optional)* Number of characters to remove. Defaults to 1

Use Getters/Setters to manipulate [Doc](/docs/doc).
