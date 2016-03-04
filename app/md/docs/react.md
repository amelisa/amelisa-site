# React

Each React component can subscribe to data independently. Amelisa will handle situations if two components are subscribed to the same data, it will make only one request to server, or if data is already available on client, it will just provide it immediately.

```js
import { createContainer } from 'amelisa/react'
```

To subscribe for data, component should:
- implement `getQueries` method that returns object, where keys are names of subscribables and values are arrays of params (similar to `model.doc` and `model.query` methods). Resulting data will be available in corresponding `props` fields.
- be wrapped with `createContainer` method.

> Container = createContainer(Component)
> * `Component` Component that implements `getQueries` method
> * `Container` Returns HOC, that subscribes for data and renders Component as data is available

Model is available in component's context.

```js
class Component extends React.Component {

  static contextTypes = {
    model: React.PropTypes.object
  };

  getQueries () {
    let userId = this.context.model.get('_session.userId')
    let age = this.props.age

    return {
      user: ['users', userId],
      agedUsers: ['users', {age: {$gte: age}}],
      usersCount: ['users', {$count: true}]
    }
  }

  render () {
    let { age, user, agedUsers, usersCount } = this.props

    return (
      <div>
        <p>Current user name: {user.name}</p>
        <p>Total users count: {usersCount}</p>
        <p>Aged users names:</p>
        {agedUsers.map((agedUser) => <p onClick={this.deleteUser.bind(agedUser._id)}>{agedUser.name}</p>)}
      </div>
    )
  }

  deleteUser = (userId) => {
    this.context.model.del(`users.${userId}`)
  }
}

export default createContainer(Component)
```

## Server rendering

Server rendering in situation when every component subscribes to data independently could be not trivial, because in the components tree to be able to know what data is needed for lower components, Amelisa should render upper components first. Right now server rendering works in simple scenarios (it does not work if container components are passed as children).

```js
import { renderToString, renderToStaticMarkup } from 'amelisa/server'
```

> html = await renderToString(element, props, children)
> * `element` React element to render
> * `props` Props
> * `children` Children
> * `html` Return html string

> html = await renderToStaticMarkup(element, props, children)
> * `element` React element to render
> * `props` Props
> * `children` Children
> * `html` Return html string
