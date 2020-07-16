import React from 'react'
import SEO from '../components/seo'
import LoginWrapper from '../components/LoginWrapper'
import CreatePost from '../components/CreatePost'

const IndexPage = () => (
  <>
    <SEO title="Share something..." />
    <LoginWrapper>
      <CreatePost />
    </LoginWrapper>
  </>
)

export default IndexPage
