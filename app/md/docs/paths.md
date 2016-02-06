# Paths

Paths is a concept for representing nested JSON-objects.
For example, data structure:

```json
{
  users: {
    1: {
      name: 'Ivan',
      age: 18
    },
    2: {
      name: 'Petr',
      age: 22
    }
  }
}
```

Would have paths `users`, `users.1` and `users.2.name`.

Amelisa paths are translated into database collections and documents using a natural mapping:

`collectionName.docId.field`

## Local and remote collections

Collection names that start with and underscore `_` are local to a given model and do not sync. All collections that start with another symbol are remote and sync with server and other clients.

## GUIDs

Models provide a method to create globally unique ids. These can be used as part of a path or within mutator methods.

> `guid = model.id()`
> * `guid` Returns a globally unique identifier that can be used for model operations

Paths can be manipulated with [Getters/Setters](/docs/setters).
