import React from 'react'

import Layout from '../components/layout'
import LoginWrapper from '../components/LoginWrapper'
import SiteFields from '../components/SiteFields'
import SEO from '../components/seo'

const StoragePage = () => (
  <LoginWrapper>
    <Layout>
      <SEO title="Storage Settings" />
      <SiteFields />
    </Layout>
  </LoginWrapper>
)

export default StoragePage
