import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import sprite from './sprite.svg';

/* eslint-disable-next-line */
const Wrapper = styled(Link)`
  display: inline-block;
  width: 2rem;
  height: 2.2rem;
  background-image: url(${sprite});
  background-size: cover;

  &:focus,
  &:active {
    background-position: -2rem 0;
  }
`;

const Close = ({ to }) => <Wrapper to={to} aria-label="Close this window" />;

Close.propTypes = {
  to: PropTypes.string,
};

Close.defaultProps = {
  to: '/',
};

export default Close;
