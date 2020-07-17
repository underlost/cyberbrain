import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import Header from './header'

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
  return (
    <div className="site-wrapper pt-5 mx-4 mx-md-auto">
      <Header siteTitle={data.site.siteMetadata.title} />
      <main className="site-main px-3 px-lg-5 py-3 py-lg-5">{children}</main>
      <footer className="site-footer py-4">Cyberbrain © {new Date().getFullYear()}. Built by Tyler Rilling.</footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
