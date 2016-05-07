# Store

Store is an object that configures a connection to a database and pub/sub. Stores that are connected to same database and pub/sub are synchronized in realtime.

Amelisa supports only Mongo database right now. There are two storages:
- `MongoStorage` - connection to Mongo database. Default choice for your applications
- `MemoryStorage` - in-memory Mongo-like database. Mostly useful for writing tests

To be able to scale beyond one process, there is pub/sub system, based on Redis:
- `RedisPubsub` - connection to Redis database. Default choice for your applications
- `MemoryPubsub` - in-memory pubsub. Mostly useful for writing tests

```js
import MongoStorage from 'amelisa-mongo/MongoStorage'
import RedisPubsub from 'amelisa-redis/RedisPubsub'
import { Store } from 'amelisa'

const storage = new MongoStorage(process.env.MONGO_URL)
const pubsub = new RedisPubsub(process.env.REDIS_URL)

const options = {
  storage,
  pubsub
}

let store = new Store(options)

await store.init()
```

Find more about [store options](/docs/storeoptions)

For tests in-memory storage can be used.

```js
import MemoryStorage from 'amelisa-mongo/MemoryStorage'
import { Store } from 'amelisa'

const storage = new MemoryStorage()
const options = {
  storage
}

let store = new Store(options)

await store.init()
```

Store creates [Model](/docs/model).
