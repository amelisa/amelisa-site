# Subscribe

Model is empty when created and should be filled with data to work with. There are two ways to do it: `subscribe` - fills model with copy of data and sync changes from server with local copy. `fetch` - just fills model with copy of data.

> `subscription = await model.subscribe(items...)`  
> `subscription = await model.fetch(items...)`   
> `await model.unsubscribe(subscription)`  
> `await model.unfetch(subscription)`  
> * `items` Accepts one or more subscribable items, including a document or query
> * `subscription` emits 'change' event when any of the items is changed

For example, if you want to change field on document, you should fetch whole document to model and then make a mutation.

```js
let model = store.createModel()

let $user = model.doc('user', '1')

await model.fetch($user)

$user.set('age', 18)
// or
model.set('users.1.age', 18)
```
