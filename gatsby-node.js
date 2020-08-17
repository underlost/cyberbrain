// graphql function doesn't throw an error so we have to check to check for the result.errors to throw manually
const wrapper = promise => promise.then((result) => {
  if (result.errors) {
    throw result.errors
  }
  return result
})

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  let slug
  // Only use MDX nodes
  if (node.internal.type === `Mdx`) {
    const fileNode = getNode(node.parent)
    // If the frontmatter contains a "permalink", use it
    if (
      Object.prototype.hasOwnProperty.call(node, `frontmatter`) &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, `slug`)
    ) {
      slug = `/${node.frontmatter.slug}`
      createNodeField({ node, name: `slug`, value: slug })
      // Adds the name of "gatsby-source-filesystem" as field (in this case "projects" or "pages")
      createNodeField({ node, name: `sourceInstanceName`, value: fileNode.sourceInstanceName })
    }
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // Our templates for projects and files inside /pages/*.mdx
  const singlePage = require.resolve(`./src/templates/page.js`)

  const result = await wrapper(
    graphql(`
      {
        pages: allMdx(filter: {
          fields: {
            sourceInstanceName: {
              eq: "pages"
            }
          }
        }) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `)
  )

  result.data.pages.edges.forEach((edge) => {
    createPage({
      path: edge.node.fields.slug,
      component: singlePage,
      context: {
        slug: edge.node.fields.slug,
      },
    })
  })
}

// Necessary changes to get gatsby-mdx and Cypress working
// eslint-disable-next-line no-unused-vars
exports.onCreateWebpackConfig = ({ stage, actions, loaders, getConfig }) => {
  const config = getConfig()

  config.module.rules = [
    ...config.module.rules.filter(rule => String(rule.test) !== String(/\.jsx?$/)),
    {
      ...loaders.js(),
      test: /\.jsx?$/,
      exclude: modulePath => /node_modules/.test(modulePath) && !/node_modules\/gatsby-mdx/.test(modulePath),
    },
  ]
  actions.replaceWebpackConfig(config)
}

// eslint-disable-next-line no-unused-vars
exports.onCreateWebpackConfig = ({ actions, loaders, getConfig }) => {
  const config = getConfig()
  config.node = {
    fs: `empty`,
  }
}
