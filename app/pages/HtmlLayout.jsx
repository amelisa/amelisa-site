import React, { PropTypes } from 'react'

class HtmlLayout extends React.Component {

  static propTypes = {
    children: PropTypes.any
  };

  render () {
    let { children } = this.props
    let style

    if (process.env.NODE_ENV === 'production') {
      style = <link href='/css/apps/app.styles.css' rel='stylesheet' type='text/css' />
    }

    return (
      <html>
        <head>
          <title>Amelisa. Offline and real-time for React and Mongo.</title>
          <meta name='description' content='Amelisa, React, Mongo, Offline First, Real-time, CRDT' />
          <meta name='viewport' content='width=device-width, initial-scale=1.0' />
          <link rel='stylesheet' href='/extra/material.min.css' />
          <link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons' />
          {style}
        </head>
        <body>
          <div id='app'>
            {children}
          </div>
          <script defer src='/extra/material.min.js' />
          <script defer src='/js/bundle.js' />
        </body>
      </html>
    )
  }
}

export default HtmlLayout
