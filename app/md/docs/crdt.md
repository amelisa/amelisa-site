# CRDT

Document is op-based CmRDT key-value data type with nested keys. Basically, document is doc id and log of operations (oplog). There are three types of operations: `add`, `set` and `del`. Every operation has global timestamp. To be able to make queries, document state is also stored in database. Actually state, oplog and other metadata are stored in same document and utilize mongo document level atomicity to achieve consistency.

Oplog size for particular document should not exceed number of document fields. This is possible, because last operation on particular field overwrites all previous operations on same field and there is no need to store all of them. Oplog clean itself from redundant operations,  every time it receives new op.

Assuming that replicas exchange operations in partial order (operations from particular replica for particular document are sent ordered by timestamp), it's possible to use global vector versions, consisting of sources (replica names) and timestamps of last op, to find diffs of operations needed to sync replicas.

All metadata fields:
- `_id` Document id
- `_ops` Operations log
- `_v` Global vector version
- `_sv` *(only on client)* Server version. Amelisa uses this to optimize sync between client and server
- `_del` Deleted flag. Even if document is deleted, it stays in database with `_del` flag to be able to merge stale ops properly. Any following operations will recreate document

Metadata fields are only for internal purpose and are not returned with `model.get`, except `_id` field.

Metadata means that even on server all manipulations with data should be done through Amelisa server-side api. Direct manipulations on database can lead to inconsistency between document state, oplog and other metadata fields.
