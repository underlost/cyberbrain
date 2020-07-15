import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import LoginWrapper from '../components/LoginWrapper'
import { getCurrentUser } from '../util/storage'
import { navigate } from 'gatsby'

const LogoutPage = () => {
  const guid = getCurrentUser().guid

  const handleSubmit = (event) => {
    event.preventDefault()
    localStorage.removeItem(`cyberbrainUser`)
    localStorage.removeItem(`token`)
    navigate(`/login`)
  }

  return (
    <LoginWrapper>
      <Layout>
        <SEO title="Logout" />
        <h6 className="text-uppercase">Logout</h6>
        <p className="mb-5">Before logging out, you should save your token if you would like to retieve your data again later on.</p>

        <h6 className="text-uppercase mb-0">Token</h6>
        <pre className="highlight text-center">
          <h5>{guid}</h5>
        </pre>
        <form
          className={`form`}
          method="post"
          onSubmit={(event) => {
            handleSubmit(event)
            //navigate(`/`)
          }}>
          <button className="btn btn-block btn-primary">Logout</button>
        </form>
      </Layout>
    </LoginWrapper>
  )
}

export default LogoutPage
