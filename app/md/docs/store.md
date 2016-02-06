# Store

Store is an object that configures a connection to a database and pub/sub. Stores that are connected to same database and pub/sub are synchronized in realtime.

Amelisa supports only Mongo database right now. There are two storages:
- `MongoStorage` - connection to real Mongo database. Default choice for your applications
- `MemoryStorage` - in-memory Mongo-like database. Mostly useful for writing tests

If you want to scale beyond one process, you need pub/sub system for inter-process message exchange. `RedisChannel` is an  implementation of pub/sub over Redis. As Redis can not work both as pub and sub simultaneously, you need two channels, one for publishing message, another for receiving them.

You can specify some access control options: which collections should be sent to client and projections.

```js
import { MongoStorage, RedisChannel, Store } from 'amelisa'

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
const mongoUrl = process.env.MONGO_URL
const redisUrl = process.env.REDIS_URL

let storage = new MongoStorage(mongoUrl)
let pub = new RedisChannel(redisUrl)
let sub = new RedisChannel(redisUrl, true)

await Promise.all([
  storage.init(),
  pub.init(),
  sub.init()
])

let store = new Store(storage, pub, sub, options)
```

Store creates [Model](/docs/model).
