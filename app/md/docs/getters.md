# Getters

Data in model is accessed by `model.get()`. This method returns values by reference, based on the path passed to the get method. Models allow getting undefined paths. The get method will return `undefined` and will not throw when looking up a property below another property that is undefined.

Internally, model data is represented as collections of documents. Collections must be objects, and documents may be of any type, but are also typically objects. A document's data at a point in time is referred to as its snapshot. This structure allows for some documents to be remote documents synced with the server and some to be local documents only in the client. It also means that models are broken into a similar structure as database collections or tables.

As model document snapshots change from local or remote mutations, the model's data is updated. model.get() traverses through the properties of the model's data to lookup and return the appropriate value.

> `value = model.get([path])`
> * `path` *(optional)*  Path of object to get. Not supplying a path will return all data in the model
> * `value` Current value of object at the given path

Sometimes it's convenient to use alternative api:

> `value = model.get([collectionName], [docId], [field])`
> * `collectionName` *(optional)* Name of collection
> * `docId` *(optional)* Document id
> * `field` *(optional)* Document field
> * `value` Current value of object at the given path


To manipulate data use [Setters](/docs/setters).
