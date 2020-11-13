import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';

const Twitter = ({ title, description, url, image, type, username }) => (
  <Helmet>
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:url" content={url} />
    <meta name="twitter:image" content={image} />
    <meta name="twitter:image:width" content={1200} />
    <meta name="twitter:image:height" content={628} />
    <meta name="twitter:card" content={type} />
    {username && <meta name="twitter:creator" content={username} />}
  </Helmet>
);

export default Twitter;

Twitter.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  type: PropTypes.string,
  username: PropTypes.string,
};

Twitter.defaultProps = {
  type: 'summary_large_image',
  username: null,
};
