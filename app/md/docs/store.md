# Store

Store is an object that configures a connection to a database and pub/sub. Stores that are connected to same database and pub/sub are synchronized in realtime.

Amelisa supports only Mongo database right now. There are two storages:
- `MongoStorage` - connection to real Mongo database. Default choice for your applications
- `MemoryStorage` - in-memory Mongo-like database. Mostly useful for writing tests

If you want to scale beyond one process, you need pub/sub system for inter-process message exchange. `RedisChannel` is an  implementation of pub/sub over Redis. As Redis can not work both as pub and sub simultaneously, you need two channels, one for publishing message, another for receiving them.


```js
import { MongoStorage, RedisChannel, Store } from 'amelisa'

const storage = new MongoStorage(process.env.MONGO_URL)
const pub = new RedisChannel(process.env.REDIS_URL)
const sub = new RedisChannel(process.env.REDIS_URL, true)
const options = {}

await storage.init()
await pub.init()
await sub.init()

let store = new Store(storage, pub, sub, options)
```

Find more about [store options](/docs/storeoptions)

For tests in-memory storage can be used.

```js
import { MemoryStorage, Store } from 'amelisa'

const storage = new MemoryStorage()

await storage.init()

let store = new Store(storage)
```

Store creates [Model](/docs/model).
