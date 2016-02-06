import React from 'react';
import {Paper} from 'material-ui';
import html from '../md/features.md';

class Home extends React.Component {

  render() {
    return (
      <div className='home-layout'>
        <section className='name'>
          <label>AmelisaJS</label>
          <div className='moto'>Data engine with offline and realtime</div>
          <div>React/Mongo/NodeJS integration</div>
        </section>
        <section className='features'>
          <div dangerouslySetInnerHTML={{__html: html}}></div>
        </section>
        <section className='warning'>
          <div>
            Warning. Alpha version. Not ready for production.
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
