import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import { Styled, Box } from 'theme-ui';

import { Wrapper, AmigaTick, DiskDrive, FloppyDisk } from './style';

const KickStartStaticQuery = graphql`
  query kickstartStaticQuery {
    site {
      siteMetadata {
        author
        copyrightYear
      }
    }
  }
`;

const KickStartTemplate = ({ data }) => {
  const { site } = data;
  const { siteMetadata } = site;
  const { copyrightYear, author } = siteMetadata;
  return (
    <Wrapper as="main">
      <Box __css={{ width: 180, ml: [null, null, 6], mb: 6 }}>
        <AmigaTick />
        <Styled.p>
          2.0 Roms (37.350)
          <br />
          {`Copyright © 2000-${copyrightYear}`}
        </Styled.p>
        <Styled.h1>{author}, Inc.</Styled.h1>
        <Styled.p>All Rights Reserved</Styled.p>
      </Box>

      <Box
        as={Link}
        to="/"
        aria-label="Return to Workbench"
        __css={{
          height: 169,
          width: 156,
          mr: [null, null, 6],
          mb: [null, null, 6],
          position: 'relative',
        }}
      >
        <DiskDrive />
        <FloppyDisk
          animate
          sx={{ position: 'absolute', bottom: -25, left: 12 }}
        />
      </Box>
    </Wrapper>
  );
};

KickStartTemplate.propTypes = {
  data: PropTypes.shape().isRequired,
};

const KickStart = () => (
  <StaticQuery
    query={KickStartStaticQuery}
    render={(data) => <KickStartTemplate data={data} />}
  />
);

export default KickStart;
