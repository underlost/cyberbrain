import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import Header from './header'
import Nav from './Nav'
import SvgRing from './SvgRing'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [menuState, setMenuState] = useState(`nav-is-closed`)
  const toggleMenu = () => {
    setMenuState(state => (state === `nav-is-closed` ? `nav-is-active` : `nav-is-closed`))
  }

  return (
    <div id="page" className={`viewport ${menuState}`}>
      <div className="toggle-wrapper">
        <button className={`button navbar-toggler`} data-target="page-wrap" onClick={() => toggleMenu()}>
          <span className={`icon-bar top-bar`} />
          <span className={`icon-bar middle-bar`} />
          <span className={`icon-bar middle-bar`} />
          <span className={`icon-bar bottom-bar`} />
          <span className={`sr-only`}>Toggle navigation</span>
        </button>
      </div>
      <div className="site-wrapper pt-5">
        <Header siteTitle={data.site.siteMetadata.title} />
        <Nav />
        <main className="site-main px-3 px-lg-5 py-3 py-lg-5">{children}</main>
        <footer className="site-footer py-4">© {new Date().getFullYear()}</footer>
        <SvgRing />
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
