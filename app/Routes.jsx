import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Root from './pages/Root'
import Docs from './pages/Docs'
import Home from './pages/Home'
import Faq from './pages/Faq'
import Resources from './pages/Resources'

let Routes = (
  <Route path='/' component={Root}>
    <IndexRoute component={Home}/>
    <Route path='/docs' component={Docs}>
      <Route path=':section' component={Docs}/>
    </Route>
    <Route path='/faq' component={Faq} />
    <Route path='/resources' component={Resources} />
  </Route>
)

export default Routes
