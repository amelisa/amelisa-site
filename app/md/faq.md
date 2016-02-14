# FAQ

### Is it ready for production?

No. It's not stable enough

### What are the nearest plans?

Stabilize, write more tests, start using it in production, integrate with React Native

### Who is behind Amelisa?

[Me](https://github.com/vmakhaev) and right now we are making one project using Amelisa in [company](http://decisionmapper.com/) where I work.

### How did you come up with the idea?

Have been using [DerbyJS](http://derbyjs.com/) for some years, which is based on [ShareJS](https://github.com/share/ShareJS) (Operational Transformation) and has a great Model api (Racer). Also recently made acquaintance with [SwarmJS](https://github.com/gritzko/swarm) based on CRDT. The idea was to combine Racer api with paths, db queries, etc and CRDT offline capabilities.

### Why NodeJS?

Because significant amount of code is isomorphic (shared between client and server). Also use case where a lot of web-socket connections are exchanging tiny operations is good fit for NodeJS.

### Why React?

It's popular, and easy to integrate. React fits well, because it's just like a missing part (View).

### Why Mongo?

It's popular, document-oriented, has rich structural query language.

### Is it possible to integrate it with another framework (Ember, Angular, etc)?

Most likely, yes.

### Is it possible to integrate it with another database (RethinkDB, Postgres, etc)?

Yes. But to execute queries offline something like [Mingo](https://github.com/kofrasa/mingo) is needed.

### What is the best way to follow the news?

Follow the [Twitter](https://twitter.com/amelisajs)
