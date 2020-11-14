import React from 'react';
import PropTypes from 'prop-types';

import GlobalStyle from '../styles/global';

const Doc = (props) => {
  const { children } = props;
  return (
    <>
      <GlobalStyle />
      <main>{children}</main>
    </>
  );
};

Doc.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Doc;
