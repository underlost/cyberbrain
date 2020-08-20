import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import SvgHeader from './svgHeader'

const Header = ({ siteTitle }) => (
  <header className="site-header">
    <h1 className="h2 text-lowercase mb-md-0">
      <Link
        to="/"
        style={{
          color: `#231f20`,
        }}>
        {siteTitle}
      </Link>
    </h1>
    <SvgHeader />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
