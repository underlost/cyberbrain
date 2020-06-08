import React, { useState } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { getCurrentUser, getCurrentFields } from '../util/storage'

const DebugPage = () => {
  const siteName = getCurrentUser().siteName
  const siteAPI = getCurrentUser().siteAPI

  const fieldsGUID = getCurrentFields().guid
  const fields = getCurrentFields().fields

  const [fieldsState, setFieldsState] = useState([{}])
  if (fields) {
    setFieldsState(fields)
  }

  console.log(fields)

  return (
    <Layout>
      <SEO title="Debug" />
      <h2 className="text-uppercase">Debug Details</h2>

      <pre className="highlight mb-5">
        <h6>Site Settings localStorage:</h6>
        URL: {siteName} <br />
        API: {siteAPI} <br />
        guid: {getCurrentUser().guid}
      </pre>

      <pre className="highlight mb-5">
        <h6>Field localStorage:</h6>
        guid: {fieldsGUID} <br />
        {fieldsState.map((fieldname, index) => (
          <h6 key={index}>{fieldname.text}</h6>
        ))}
      </pre>
    </Layout>
  )
}

export default DebugPage
