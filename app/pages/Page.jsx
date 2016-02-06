import React from 'react';
import {Paper} from 'material-ui';

class Page extends React.Component {

  render() {
    let {name, html} = this.props;

    return (
      <div>
        {name}
        <Paper dangerouslySetInnerHTML={{__html: html}}>
        </Paper>
      </div>
    );
  }
}

export default Page;
