import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Facebook from './Facebook'
import Twitter from './Twitter'

const query = graphql`
  query SEO {
    site {
      buildTime(formatString: "YYYY-MM-DD")
      siteMetadata {
        siteTitle: title
        siteDescription: description
        siteUrl
        siteImage: image
        siteLanguage: language
        ogLanguage
        author
        twitter
        facebook
      }
    }
  }
`

const SEO = props => {
  const { index, name, description, url, image, website, node } = props
  return (
    <StaticQuery
      query={query}
      render={({
        site: {
          buildTime,
          siteMetadata: {
            siteTitle,
            siteDescription,
            siteUrl,
            siteImage,
            siteLanguage,
            ogLanguage,
            author,
            twitter,
            facebook,
          },
        },
      }) => {
        const seo = {
          name: name || siteTitle,
          description: description || siteDescription,
          url: `${siteUrl}${url}` || siteUrl,
          image: image || siteImage,
        }

        let titleTemplate

        if (!index) {
          titleTemplate = `%s - ${siteTitle}`
        }

        // schema.org in JSONLD format
        // https://developers.google.com/search/docs/guides/intro-structured-data
        // You can fill out the 'author', 'creator' with more data or another type (e.g. 'Organization')

        const schemaOrgWebPage = {
          '@context': 'http://schema.org',
          '@type': 'WebPage',
          url: siteUrl,
          // headline,
          inLanguage: siteLanguage,
          mainEntityOfPage: siteUrl,
          description: siteDescription,
          name: siteTitle,
          author: {
            '@type': 'Person',
            name: author,
          },
          copyrightHolder: {
            '@type': 'Person',
            name: author,
          },
          copyrightYear: 2019,
          creator: {
            '@type': 'Person',
            name: author,
          },
          publisher: {
            '@type': 'Person',
            name: author,
          },
          datePublished: '2019-02-23T23:58:00',
          dateModified: buildTime,
          image: {
            '@type': 'ImageObject',
            url: image,
          },
        }

        // Initial breadcrumb list
        const itemListElement = [
          {
            '@type': 'ListItem',
            item: {
              '@id': siteUrl,
              name: 'Homepage',
            },
            position: 1,
          },
        ]

        let schemaWebsite = null

        if (website) {
          schemaWebsite = {
            '@context': 'http://schema.org',
            '@type': 'Website',
            name: seo.name,
            headline: seo.name,
            description: seo.description,
            url: seo.url,
            mainEntityOfPage: seo.url,
            datePublished: node.datePublished,
            dateModified: node.dateModified,
            inLanguage: 'en',
            image: {
              '@type': 'ImageObject',
              url: seo.image,
            },
            creator: {
              '@type': 'Person',
              name: author,
            },
          }
          // Push current blogpost into breadcrumb list
          itemListElement.push({
            '@type': 'ListItem',
            item: {
              '@id': seo.url,
              name: seo.name,
            },
            position: 2,
          })
        }

        const breadcrumb = {
          '@context': 'http://schema.org',
          '@type': 'BreadcrumbList',
          description: 'Breadcrumbs list',
          name: 'Breadcrumbs',
          itemListElement,
        }

        return (
          <>
            <Helmet title={seo.name} titleTemplate={titleTemplate}>
              <html lang={siteLanguage} />
              <meta name="description" content={seo.description} />
              <meta name="image" content={seo.image} />
              {!website && (
                <script type="application/ld+json">
                  {JSON.stringify(schemaOrgWebPage)}
                </script>
              )}
              {website && (
                <script type="application/ld+json">
                  {JSON.stringify(schemaWebsite)}
                </script>
              )}
              <script type="application/ld+json">
                {JSON.stringify(breadcrumb)}
              </script>
            </Helmet>
            <Facebook
              title={seo.name}
              description={seo.description}
              url={seo.url}
              image={seo.image}
              type="website"
              siteName={facebook}
              locale={ogLanguage}
            />
            <Twitter
              title={seo.name}
              description={seo.description}
              url={seo.url}
              image={seo.image}
              username={twitter}
            />
          </>
        )
      }}
    />
  )
}

SEO.propTypes = {
  index: PropTypes.bool,
  name: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
  website: PropTypes.bool,
  node: PropTypes.shape(),
}

SEO.defaultProps = {
  index: false,
  name: null,
  description: null,
  url: '/',
  image: null,
  website: false,
  node: null,
}

export default SEO
