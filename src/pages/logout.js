import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import LoginWrapper from '../components/LoginWrapper'
import { getCurrentUser } from '../util/storage'

const LogoutPage = () => {
  const guid = getCurrentUser().guid
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
      </Layout>
    </LoginWrapper>
  )
}

export default LogoutPage
