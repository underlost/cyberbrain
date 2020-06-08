import React from 'react'

import Layout from '../components/layout'
import LoginWrapper from '../components/LoginWrapper'
import FieldNames from '../components/FieldNames'
import SEO from '../components/seo'

const FieldsPage = () => (
  <LoginWrapper>
    <Layout>
      <SEO title="Field Settings" />
      <FieldNames />
    </Layout>
  </LoginWrapper>
)

export default FieldsPage
