# FAQ

### Is it ready for production?

I would say that it's still in alpha, because of breaking api changes and minor bugs.

### What are the nearest plans?

Plugin rich-text data types, improvement of GraphQL support and using Amelisa in production.

### Who is behind Amelisa?

[Me](https://github.com/vmakhaev) and right now we are making one project using Amelisa in [company](http://decisionmapper.com/) where I work.

### How did you come up with the idea?

Have been using [DerbyJS](http://derbyjs.com/) for some years, which is based on [ShareJS](https://github.com/share/ShareJS) (Operational Transformation) and has a great Model api (Racer). Also recently made acquaintance with CRDT-based [SwarmJS](https://github.com/gritzko/swarm). The idea was to combine Racer api with paths, db queries, etc and CRDT offline capabilities.

### Why NodeJS?

Because significant amount of code is isomorphic (shared between client and server). Also use case where a lot of web-socket connections are exchanging tiny operations is good fit for NodeJS.

### Why React?

It's popular, and easy to integrate. React fits well, because it's just like a missing part (View).

### Why Mongo queries?

Because they are expressive and structural.

### Is it possible to integrate it with another framework (Ember, Angular, etc)?

Yes, there is POC for Ember.

### Is it possible to integrate it with another database (RethinkDB, Postgres, etc)?

Yes. But to execute queries offline something like [Mingo](https://github.com/kofrasa/mingo) is needed.
There is RethinkDB with Mongo queries POC implementation.

### What is the best way to follow the news?

Follow the [Twitter](https://twitter.com/amelisajs)
