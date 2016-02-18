import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { Layout as MdlLayout, Content, Drawer, Footer, FooterSection, Header, Navigation } from 'react-mdl'
import { Initializer } from 'react-google-analytics'

class Layout extends React.Component {

  static contextTypes = {
    model: PropTypes.object
  };

  static propTypes = {
    children: PropTypes.any,
    title: PropTypes.string,
    home: PropTypes.bool,
    menuItems: PropTypes.array
  };

  componentDidMount () {
    window.ga('create', 'UA-73766927-1', 'auto')
    window.ga('send', 'pageview')
  }

  render () {
    let { children, title, home, menuItems } = this.props

    let fixedDrawer = !!menuItems

    return (
      <MdlLayout fixedHeader fixedDrawer={fixedDrawer} {...this.props}>
        <Header seamed title={title}>
          <Navigation className='nav'>
            <Link to='/' key='home'>Home</Link>
            <Link to='/docs' key='docs'>Docs</Link>
            <Link to='/faq' key='faq'>FAQ</Link>
            <Link to='/resources' key='resources'>Resources</Link>
            <a href='https://github.com/amelisa/amelisa'><img src='/img/github.svg' className='github' /></a>
          </Navigation>
        </Header>
        {menuItems && <Drawer title='Docs'>
          <Navigation>
            {menuItems.map((menuItem) => {
              let { title, section } = menuItem

              return <Link to={`/docs/${section}`} key={section} onClick={this.onClick}>{title}</Link>
            })}
          </Navigation>
        </Drawer>}
        <Content>
          {children}
          {home && <Footer size='mini'>
            <FooterSection type='right' logo='Copyright © 2015' />
          </Footer>}
        </Content>
        <Initializer id='UA-73766927-1' />
      </MdlLayout>
    )
  }

  onClick = () => {
    let drawer = document.getElementsByClassName('mdl-layout__drawer')[0]
    drawer.className = drawer.className.replace(/(?:^|\s)is-visible(?!\S)/g, '')
  };
}

export default Layout
