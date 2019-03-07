module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Lance Guyatt, Web Developer', // Navigation and Site Title
  titleAlt: 'Lance Guyatt', // Title for JSONLD
  description: 'Lance Guyatt, Web Developer',
  // url: 'http://lanceguyatt.surge.sh', // Domain of your site. No trailing slash!
  language: 'en', // Language Tag on <html> element
  image: `${process.env.GATSBY_SITE_URL}/images/share.png`, // Used for SEO
  ogLanguage: 'en_GB', // Facebook Language

  // JSONLD / Manifest
  favicon: 'src/images/logo.svg', // Used for manifest favicon generation
  shortName: 'Lance Guyatt', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Lance Guyatt', // Author for schemaORGJSONLD
  themeColor: '#6080b0',
  backgroundColor: '#a0a0a0',

  twitter: '@lanceguyatt', // Twitter Username
  facebook: 'Lance Guyatt, Web Developer', // Facebook Site Name

  skipNavId: 'reach-skip-nav', // ID for the "Skip to content" a11y feature
  copyrightYear: new Date().getFullYear(),
}
