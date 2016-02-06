import React from 'react';
import {Menu, Paper} from 'material-ui';

const sections = {
  intro: {
    title: 'Intro',
    html: require('../md/docs/intro.md')
  },
  model: {
    title: 'Model',
    html: require('../md/docs/model.md')
  }
}

const menuItems = [];

for (let section in sections) {
  menuItems.push({text: sections[section].title, payload: section});
}

class Docs extends React.Component {

  constructor() {
    super();
    this.state = {};
    this._handleMenuChange = this._handleMenuChange.bind(this);
  }

  componentWillMount() {
    this.setState({
      menuIndex: 0
    });
  }

  _handleMenuChange(event, index, menuItem) {
    this.props.history.pushState(null, '/docs/' + menuItem.payload);
    this.setState({menuIndex: index});
  }

  render() {
    let {section} = this.props.params;
    section = section || 'intro';
    let {title, html} = sections[section];

    return (
      <div className='docs-layout'>
        <aside>
          <Menu
            menuItems={menuItems}
            onItemTap={this._handleMenuChange}
            selectedIndex={this.state.menuIndex}
          />
        </aside>
        <article>
          <h1>{title}</h1>
          <Paper dangerouslySetInnerHTML={{__html: html}} />
        </article>
      </div>
    );
  }
}

export default Docs;
