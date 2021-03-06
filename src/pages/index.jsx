import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import WorkBench from '../layouts/WorkBench';
import { SEO } from '../components';

const Index = ({ data }) => {
  const { contentfulPage } = data;
  const { meta } = contentfulPage;
  return (
    <WorkBench>
      <>
        <SEO {...meta} index image={meta.image.fixed.src} />
      </>
    </WorkBench>
  );
};

Index.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default Index;

export const IndexQuery = graphql`
  fragment meta on ContentfulMeta {
    name
    description
    image {
      fixed(width: 1200, height: 628) {
        src
      }
    }
  }

  fragment page on ContentfulPage {
    name
    description {
      internal {
        content
      }
    }
  }

  query indexQuery {
    contentfulPage(contentful_id: { eq: "6QMSSgGweTn9zg8KC840TD" }) {
      name
      meta {
        ...meta
      }
    }
  }
`;
