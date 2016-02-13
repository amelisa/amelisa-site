# Query

Amelisa can fetch or subscribe to database-specific query. Queries are unique by collection and expression

There are two types of queries:
- document query. Result of that query is array of docs. When fetching or subscribing to a doc query, all of the documents associated with that query are also fetched or subscribed.
- value query. Result of that query is some value. Examples:
  - `$count` Result is number
  - `$aggregate` Result is object


> `query = model.query(collectionName, expression)`
> * `collectionName` Name of collection
> * `expression` Database query
> * `query` Returns query

> `await query.subscribe()`
> * Equal to `model.subscribe(query)`. Fills query with data and sync it to database

> `await query.fetch()`
> * Equal to `model.fetch(query)`. Fills query with data

> `result = query.get()`
> * `result` Returns docs for document query and value for value query

Amelisa supports most MongoDB queries that you could pass to the Mongo find() method. See the [Mongo DB query documentation](http://docs.mongodb.org/manual/core/read-operations/#read-operations-query-document) and the [query selectors reference](http://docs.mongodb.org/manual/reference/operator/#query-selectors). Note that projections are not supported; only full documents may be returned. Also, cursor methods are not directly available, so $orderby should be used for sorting, skips and limits should be specified as $skip and $limit, count as $count and for aggregation framework use $aggregate. There is currently no findOne() equivalent—use $limit: 1 instead.
With help of [Mingo](https://github.com/kofrasa/mingo) Amelisa supports subset of Mongo queries during offline.

```js
let $adultUsers = model.query('users', {age: {$gte: 18}})
let $usersCount = model.query('users', {$count: true})

await $adultUsers.subscribe()
await $usersCount.fetch()

let adultUsers = $adultUsers.get() // array of objects
let usersCount = $usersCount.get() // number
```
