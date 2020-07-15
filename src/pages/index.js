import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import LoginWrapper from '../components/LoginWrapper'
import CreatePost from '../components/CreatePost'

const IndexPage = () => (
  <LoginWrapper>
    <Layout>
      <SEO title="Share something..." />
      <CreatePost />
    </Layout>
  </LoginWrapper>
)

export default IndexPage
