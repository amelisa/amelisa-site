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

> `await model.set(path, value)`
> * `path` Model path to set or `[collectionName, docId, field]` array
> * `value` Value to assign

> `await model.add(collectionName, doc)`
> * `collectionName` Name of collection
> * `doc` A document to add. If the document has an `_id` property, it will be set at that value underneath the path. Otherwise, an `_id` from model.id() will be set on the object first

> `await model.del(path)`
> * `path` Path to delete or `[collectionName, docId, field]` array

Use Getters/Setters to manipulate [Doc](/docs/doc).
