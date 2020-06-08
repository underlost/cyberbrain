import React, { useState } from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { getCurrentUser, handleLogin } from '../util/storage'
import { navigate } from 'gatsby'

const LoginPage = () => {
  const siteName = getCurrentUser().siteName
  const siteAPI = getCurrentUser().siteAPI
  const [siteNameState, setSiteNameState] = useState(siteName)
  const [siteAPIState, setSiteAPIState] = useState(siteAPI)

  const handleSubmit = (event) => {
    event.preventDefault()
    handleLogin({
      siteName: siteNameState,
      siteAPI: siteAPIState,
    })
    navigate(`/login`)
  }

  return (
    <Layout>
      <SEO title="Login" />
      state:
      <br />
      URL: {siteNameState} <br />
      API: {siteAPIState} <br />
      <hr />
      localStorage:
      <br />
      URL: {siteName} <br />
      API: {siteAPI} <br />
      guid: {getCurrentUser().guid}
      <hr />
      <form
        className={`form`}
        method="post"
        onSubmit={(event) => {
          handleSubmit(event)
          //navigate(`/`)
        }}>
        <div className="form-group">
          <label className={`label d-block`}>
            URL
            <input className={`form-control`} type="text" name="siteName" value={siteNameState} onChange={event => setSiteNameState(event.target.value)} />
          </label>
        </div>
        <div className="form-group">
          <label className={`label d-block`}>
            API Key
            <input className={`form-control`} type="text" name="siteAPI" value={siteAPIState} onChange={event => setSiteAPIState(event.target.value)} />
          </label>
        </div>
        <input className={`btn btn-block btn-primary`} type="submit" value="Log In" />
      </form>
    </Layout>
  )
}

export default LoginPage
