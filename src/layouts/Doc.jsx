import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

import { workbench } from '../themes';
import GlobalStyle from '../styles/global';

const Doc = (props) => {
  const { children } = props;
  return (
    <ThemeProvider theme={workbench}>
      <>
        <GlobalStyle />
        <main>{children}</main>
      </>
    </ThemeProvider>
  );
};

Doc.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Doc;
