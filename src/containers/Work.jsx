import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

import { Window, Directory } from '../components';
import { edgeToArray } from '../utils';

const WorkStaticQuery = graphql`
  query workStaticQuery {
    contentfulPage(id: { eq: "2cf1d118-a26d-57e4-8a8b-4fa3008561ec" }) {
      ...page
    }

    allContentfulWork(sort: { fields: [datePublished], order: DESC }) {
      edges {
        node {
          id
          name
          slug
        }
      }
    }
  }
`;

const WorkTemplate = ({ data, active }) => {
  const { contentfulPage, allContentfulWork } = data;
  return (
    <Window {...contentfulPage} level1 active={active} heading="h1">
      <Directory basepath="/work" list={edgeToArray(allContentfulWork)} />
    </Window>
  );
};

WorkTemplate.propTypes = {
  data: PropTypes.shape().isRequired,
  active: PropTypes.bool,
};

WorkTemplate.defaultProps = {
  active: false,
};

const Work = ({ active }) => (
  <StaticQuery
    query={WorkStaticQuery}
    render={(data) => <WorkTemplate data={data} active={active} />}
  />
);

Work.propTypes = {
  active: PropTypes.bool,
};

Work.defaultProps = {
  active: false,
};

export default Work;
