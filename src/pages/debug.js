import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { getCurrentUser, getCurrentFields } from '../util/storage'
import LoginWrapper from '../components/LoginWrapper'

const DebugPage = () => {
  const siteName = getCurrentUser().siteName
  const siteAPI = getCurrentUser().siteAPI
  const fields = getCurrentFields().fields
  console.log(fields)

  return (
    <LoginWrapper>
      <Layout>
        <SEO title="Debug" />
        <h2 className="text-uppercase">Debug Details</h2>

        <pre className="highlight mb-5">
          <h6>Site Settings localStorage:</h6>
          URL: {siteName} <br />
          API: {siteAPI} <br />
          guid: {getCurrentUser().guid}
        </pre>
      </Layout>
    </LoginWrapper>
  )
}

export default DebugPage
