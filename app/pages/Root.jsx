import React from 'react';
import ReactDom from 'react-dom';
import {Link} from 'react-router';
import {AppCanvas, IconButton, Paper, Tabs, Tab} from 'material-ui';

class Root extends React.Component {

  constructor() {
    super();
    this.state = {};
    this._handleTabChange = this._handleTabChange.bind(this);
    this._getSelectedIndex = this._getSelectedIndex.bind(this);
  }

  componentWillMount() {
    this.setState({
      tabIndex: this._getSelectedIndex()
    });
  }

  componentWillReceiveProps(nextProps, nextContext) {
    this.setState({
      tabIndex: this._getSelectedIndex()
    });
  }

  _getSelectedIndex() {
    return this.props.history.isActive('/docs') ? '1' : '0';
  }

  _handleTabChange(value, e, tab) {
    this.props.history.pushState(null, tab.props.route);
    this.setState({tabIndex: this._getSelectedIndex()});
  }

  render() {
    let githubButton = (
      <IconButton
        iconClassName="muidocs-icon-custom-github"
        href="https://github.com/amelisa/amelisa"
        linkButton={true}/>
    );

    let tabs = (
      <Tabs
        className='tabs'
        value={this.state.tabIndex}
        onChange={this._handleTabChange}>
        <Tab
          className='tab'
          value="0"
          label="HOME"
          route="/" />
        <Tab
          className='tab'
          value="1"
          label="DOCS"
          route="/docs"/>
      </Tabs>
    )

    let logo = (
      <div className='logo'>
        {this.state.tabIndex === '1' ? <Link to='/'>AmelisaJS</Link> : null}
      </div>
    )

    return (
      <AppCanvas>
        <nav>
          {logo}
          {tabs}
          {githubButton}
        </nav>
        {this.props.children}
        <footer>
          Code licensed under MIT
          {githubButton}
        </footer>
      </AppCanvas>
    );
  }
}

export default Root;
