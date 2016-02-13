import React, { PropTypes } from 'react'
import Layout from '../components/Layout'

const sections = {
  intro: {
    title: 'Intro',
    html: require('../md/docs/intro.md')
  },
  store: {
    title: 'Store',
    html: require('../md/docs/store.md')
  },
  model: {
    title: 'Model',
    html: require('../md/docs/model.md')
  },
  paths: {
    title: 'Paths',
    html: require('../md/docs/paths.md')
  },
  subscribe: {
    title: 'Subscribe',
    html: require('../md/docs/subscribe.md')
  },
  getters: {
    title: 'Getters',
    html: require('../md/docs/getters.md')
  },
  setters: {
    title: 'Setters',
    html: require('../md/docs/setters.md')
  },
  doc: {
    title: 'Doc',
    html: require('../md/docs/doc.md')
  },
  query: {
    title: 'Query',
    html: require('../md/docs/query.md')
  },
  date: {
    title: 'Date',
    html: require('../md/docs/date.md')
  },
  storeoptions: {
    title: 'Store options',
    html: require('../md/docs/storeoptions.md')
  },
  hooks: {
    title: 'Hooks',
    html: require('../md/docs/hooks.md')
  },
  react: {
    title: 'React',
    html: require('../md/docs/react.md')
  },
  crdt: {
    title: 'CRDT',
    html: require('../md/docs/crdt.md')
  }
}

const menuItems = []

for (let section in sections) {
  let { title } = sections[section]
  menuItems.push({title, section})
}

class Docs extends React.Component {

  static propTypes = {
    params: PropTypes.object
  };

  render () {
    let { section = 'intro' } = this.props.params
    let { html } = sections[section]

    return (
      <Layout className='Docs' menuItems={menuItems}>
        <article className='article'>
          <div dangerouslySetInnerHTML={{__html: html}} />
        </article>
      </Layout>
    )
  }
}

export default Docs
