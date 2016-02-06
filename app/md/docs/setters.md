# Getters/Setters

To be able to use any of getter or setters, model should be prefilled with data with subscribe/fetch.
Get can return all collections, collection, document or document field.

> `value = model.get(collectionName, docId, field, ...)`
> * `value` Returns data from the path
> * `collectionName` *(optional)* Name of collection
> * `docId` *(optional)* Document id
> * `field` *(optional)* Document field

> `value = model.get(path)`
> * `value` Returns data from the path
> * `path` Path to get value

Set can be applied at least to document field.

> `await model.set([collectionName, docId, field, ...], value)`
> * `collectionName` Name of collection
> * `docId` Document id
> * `field` Document field
> * `value` Value to set on the path

> `await model.set(path, value)`
> * `path` Path to set value
> * `value` Value to set on the path

If doc does not contain `_id` field, it will be generated with `model.id()`

> `await model.add(collectionName, doc)`
> * `collectionName` Name of collection
> * `doc` Document

Del can be applied at least to document.

> `await model.del([collectionName, docId, field, ...])`
> * `collectionName` Name of collection
> * `docId` Document id
> * `field` *(optional)* Document field

> `await model.del(path)`
> * `path` Path to delete

Use Getters/Setters to manipulate [Doc](/docs/doc).
