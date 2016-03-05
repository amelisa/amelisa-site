# React

React components declaratively subscribes for Mongo queries. Container, which wraps component (HOC) handles subscriptions and renders component with data provided in props. For data mutations, Amelisa's isomorphic api (Model) is utilized.

First, you need to create model on client side:

```js
import { getModel } from 'amelisa/react'

let model = getModel()
```

Model has `ready` event, which is triggered after handshake with server (while online) or after local storage initialization (while offline). It shows that model api is ready to be used.
It's convenient to have model in React context, to be able to reach it in every component. There is `RootComponent` that can be used as your app root component. It waits model in props and put it into context.

```js
import { RootComponent } from 'amelisa/react'

model.on('ready', () => {
  render(<RootComponent model={model} />)
})
```

Components declare subscriptions by implementing `getQueries` method. It should return object, where keys are names of subscribables and values are arrays of params (similar to `model.doc` and `model.query` methods). Resulting data will be available in corresponding `props` fields.
Components are wrapped with HOC by `createContainer` method.

```js
import { createContainer } from 'amelisa/react'
```

> Container = createContainer(Component)
> * `Component` Component that implements `getQueries` method
> * `Container` Returns HOC, that subscribes for data and renders Component as data is available

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
