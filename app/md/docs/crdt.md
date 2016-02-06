# CRDT

Document is op-based CRDT key-value data type. It means that besides state, it has log of operations (oplog). There are three types of operations: `add`, `set` and `del`. Every operation has global timestamp, to make it possible Amelisa sync time between client and server on connection.

All metadata fields:
- `_id` Document id
- `_ops` Oplog. With key-value there is no need to store all operations on particular field, because last operation on particular field will rewrite all previous on same field. So document can distill it's oplog by deleting redundant ops and oplog size should not be more than number of fields. This makes it possible to store oplog at the same Mongo document as state to achieve consistency between them two.
- `_v` Global document version. Assuming that operations from sources are come partially ordered (ordered on document basis), version includes only timestamps of last operation from every source. Version makes it possible to understand minimal diff of operations, that should be exchanged.
- `_sv` *(only on client)* Server version. Amelisa uses this to optimize sync between client and server.
- `_del` Deleted flag. Even if document is deleted, it stays in database with `_del` flag, by reason to be able to handle following operations, if they are. For example, if one user deletes document and another user changes it in a while, document will not be recreated.

Metadata fields are only for internal purpose and are not returned with `model.get`, except `_id` field.

Metadata means that, as a rule, all manipulations with data should be done through Amelisa api. Direct manipulations can lead to inconsistency between document state, oplog and other metadata fields.
