import React from 'react'
import Layout from '../components/Layout'
import html from '../md/faq.md'

class Faq extends React.Component {

  render () {
    return (
      <Layout>
        <article>
          <div dangerouslySetInnerHTML={{__html: html}}></div>
        </article>
      </Layout>
    )
  }
}

export default Faq
