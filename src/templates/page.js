import React from 'react'
import { graphql, Link } from 'gatsby'
import PropTypes from 'prop-types'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import SEO from '../components/seo'
import Layout from '../components/layout'

const templatePage = ({ data }) => {
  const post = data.mdx
  const shortcodes = { Link }

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <h1 className="h2 mb-5">{post.frontmatter.title}</h1>
      <MDXProvider components={shortcodes}>
        <MDXRenderer>{post.body}</MDXRenderer>
      </MDXProvider>
    </Layout>
  )
}

export default templatePage

templatePage.propTypes = {
  data: PropTypes.node.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      excerpt
      fields {
        slug
      }
      frontmatter {
        title
        slug
      }
    }
  }
`
