require('dotenv').config()

const {
  ANALYTICS_ID,
  CONTENTFUL_ACCESS_TOKEN,
  CONTENTFUL_SPACE_ID,
  GATSBY_SITE_URL,
} = process.env

const website = require('./config/website')

const pathPrefix = website.pathPrefix === '/' ? '' : website.pathPrefix

module.exports = {
  siteMetadata: {
    siteUrl: GATSBY_SITE_URL + pathPrefix, // For gatsby-plugin-sitemap
    pathPrefix,
    title: website.title,
    titleAlt: website.titleAlt,
    description: website.description,
    image: website.image,
    language: website.language,
    ogLanguage: website.ogLanguage,
    author: website.author,
    twitter: website.twitter,
    facebook: website.facebook,
    copyright: website.copyright,
    copyrightYear: website.copyrightYear,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: website.themeColor,
        showSpinner: false,
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: CONTENTFUL_SPACE_ID,
        accessToken: CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: website.titleAlt,
        short_name: website.titleAlt,
        description: website.description,
        start_url: pathPrefix,
        background_color: website.backgroundColor,
        theme_color: website.themeColor,
        display: 'minimal-ui',
        icon: website.favicon,
        include_favicon: true, // Include favicon
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        displayName: false,
        fileName: false,
        minify: true,
        pure: true,
        ssr: true,
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: ANALYTICS_ID,
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        // anonymize: true,
        // Setting this parameter is also optional
        // respectDNT: true,
        // Avoids sending pageview hits from custom paths
        // exclude: ['/preview/**', '/do-not-track/me/too/'],
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
  ],
}
