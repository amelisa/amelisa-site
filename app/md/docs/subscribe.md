# Subscribe

When created model is empty. There are two ways to fill it with data:

> `await model.subscribe(items...)`
> * `items` Accepts one or more subscribable items
> * Fills model with data and sync it to database

> `await model.fetch(items...)`
> * `items` Accepts one or more subscribable items
> * Fills model with data

Subscribable item can be any of these types: `doc`, `query`, `path`, `collectionName`, `[collectionName, docId]` array, `[collectionName, expression]` array

```js
let model = store.createModel()

let $user = model.doc('user', '1')
let $items = model.query('items', {})

await model.subscribe($user, 'users.2', ['users', '3'], $items, 'todos', ['products', {}])

// Model is filled with three user documents and items, todos, products queries

let user1 = model.get('users.1')
let user2 = model.get('users.2')
let user3 = model.get('users.3')
let items = model.query('items', {}).get()
let todos = model.query('todos', {}).get()
let products = model.query('products', {}).get()
```

Get data with [Getters](/docs/getters).
