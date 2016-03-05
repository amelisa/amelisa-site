# Store options

- `version` Application version. Is used as IndexedDB version. Right now it should be changed manually every time you change `collections` property to upgrade IndexedDB by creating new object stores. Also if during sync handshake with server, model discovers that server's app version is different from client's, it emits `version` event. It can be used to refresh page.
- `collections` Collections that are sent to the client should be specified here. `model.prepareBundle()` can be used to sanitize model data from server-only collections. This is useful for model's data serialization before sending it to client. This option also used for creating object stores for IndexedDB
- `projections` Projection - is virtual collection that contains documents with only specified fields. This is useful if you do not want send to client whole document. Projections can be inclusive and exclusive.
- `clientStorage` Enable/disable using IndexedDB. If disabled, data on client will be stored in-memory and lost on browser closing.

```js
const options = {
  version: 1,
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

let store = new Store(storage, pub, sub, options)
```
