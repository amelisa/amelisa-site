import React from 'react'
import Layout from '../components/Layout'
import html from '../md/features.md'

class Home extends React.Component {

  render () {
    return (
      <Layout home>
        <section className='name'>
          <div className='logo'>
            <img src='/img/logo_amelisa.png' />
          </div>
          <label>Amelisa</label>
          <div className='moto'>Data engine with offline and realtime</div>
          <div>React/Mongo/NodeJS integration</div>
        </section>
        <section className='features'>
          <div dangerouslySetInnerHTML={{__html: html}}></div>
        </section>
        <section className='warning'>
          <div>
            Alpha version. Not ready for production
          </div>
        </section>
      </Layout>
    )
  }
}

export default Home
