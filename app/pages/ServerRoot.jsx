import React from 'react';

class ServerRoot extends React.Component {

  render() {
    return (
      <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
        <body>
          <div id='app'></div>
          <script src='/js/bundle.js' />
        </body>
      </html>
    );
  }
}

export default ServerRoot;
