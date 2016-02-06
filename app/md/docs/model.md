# Model

`Model` is an isomorphic getter/setter and event emitter, which provides the main api to interact with data in application logic.
Model contains subset of global state, by subscribing to documents and queries. In the browser model saves it's state to IndexedDB. This makes it possible to mutate data while offline (even close browser) and be able to sync all changes with database as online occur without any data loss.

Models are created from store.

```js
let model = store.createModel()
```

For Express apps there is a way to create request-specific model which is shared between middlewares. `store.modelMiddleware` creates `req.getModel` method that returns every time same model, connected to current request. This is useful for your auth logic and if you want to serialize your model state and send it to client and deserialize there.

```js
let app = express()

app.use(store.modelMiddleware())

app.use((req, res, next) => {
  let model = req.getModel()
})
```

Model uses [Paths](/docs/paths).
