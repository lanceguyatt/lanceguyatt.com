const path = require('path')

// graphql function returns a promise so we can use this little promise helper to have a nice result/error state
const wrapper = promise =>
  promise
    .then(result => ({ result, error: null }))
    .catch(error => ({ error, result: null }))

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const Work = path.resolve(`./src/templates/work.jsx`)

  const { error, result } = await wrapper(
    graphql(`
      {
        allContentfulWork {
          edges {
            node {
              name
              slug
            }
          }
        }
      }
    `)
  )

  if (!error) {
    const works = result.data.allContentfulWork.edges

    works.forEach(work => {
      createPage({
        path: `/work/${work.node.slug}/`,
        component: Work,
        context: {
          slug: work.node.slug,
        },
      })
    })

    return
  }

  console.log(error)
}
