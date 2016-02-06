# Query

There are two types of queries:
- document query. Result of such query is array of docs
- value query. Result of such query is some value. Examples: `$count`, `$aggregate`, `$mapreduce`
Queries are unique by collection and expression

> `query = model.query(collectionName, expression)`
> * `query` Return query
> * `collectionName` Name of collection
> * `expression` Mongo query

Queries can be manipulated directly. There are `query.subscribe`, `query.fetch`, `query.get` methods similar to model equivalents.

```js
let $adultUsers = model.query('users', {age: {$gte: 18}})
let $usersCount = model.query('users', {$count: true})

await Promise.all([
  $adultUsers.fetch(),
  $usersCount.fetch()
])

let adultUsers = $adultUsers.get() // array of objects
let usersCount = $usersCount.get() // number
```
