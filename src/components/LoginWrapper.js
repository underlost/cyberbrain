import React from 'react'
import PropTypes from 'prop-types'
import { isLoggedIn } from '../util/storage'
import { navigate } from 'gatsby'

const LogginWrapper = ({ children }) => {
  if (isLoggedIn()) {
    return <div className="loggedIn">{children}</div>
  } else {
    if (typeof window !== `undefined`) {
      navigate(`/login`)
    }
    return null
  }
}

LogginWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LogginWrapper
