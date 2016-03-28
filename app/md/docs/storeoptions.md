# Store options

- `version` Application version. While web, it used as IndexedDB version also. Right now it should be changed manually every time you change `collections` property to upgrade IndexedDB by creating new object stores. Also if during sync handshake with server, model discovers that server's app version is different from client's, it emits `version` event. This can be used for refreshing page.
- `storage` Db adapter to store main data (states and actual oplog)
- `opsStorage` *(optional)* Db adapter to store all history of operations
- `pubsub` *(optional)* Pub/sub adapter
- `collections` Collections that are sent to the client should be specified here. `model.prepareBundle()` can be used to sanitize model data from server-only collections. This is useful for model's data serialization before sending it to client. This option also used for creating object stores for IndexedDB
- `projections` Projection - is virtual collection that contains documents with only specified fields. This is useful if you do not want send to client whole document. Projections can be inclusive and exclusive.
- `clientStorage` Enable/disable using client storage (IndexedDB for web). If disabled, data on client will be stored in-memory and lost on browser closing.

```js
const options = {
  version: 1,
  storage,
  opsStorage,
  pubsub,
  collections: {
    auths: {
      client: false
    },
    users: {
      client: true
    },
    todos: {
      client: true
    }
  },
  projections: {
    users: {
      collectionName: 'auths',
      fields: {
        _id: true,
        email: true,
        name: true
      }
    }
  },
  clientStorage: true
}

let store = new Store(options)
```
