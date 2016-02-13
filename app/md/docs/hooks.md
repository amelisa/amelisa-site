# Hooks

There are two store hooks, that if specified are called during ops are processed on server.

`preHook` is called right before op is saved to database. It's the best place for validation and access control. If method throws and error, op is refused to save.

> store.preHook = async (op, session, params) => {}
> * `op` Current operation. Ops can be distinguished by their `type`, `collectionName`, `docId`, `field`, `value` and other properties
> * `session` If session middleware is used, it contains session values
> * `params` Contains `server` field, which specify if op origin is server-created model

`afterHook` is called right after op is saved to database. It's where some op connected business logic can be run.

> store.afterHook = async (op, session, params) => {}
> * `op` Current operation. Ops can be distinguished by their `type`, `collectionName`, `docId`, `field`, `value` and other properties
> * `session` If session middleware is used, it contains session values
> * `params` Contains `server` field, which specify if op origin is server-created model
