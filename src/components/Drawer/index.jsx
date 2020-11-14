import React from 'react';
import PropTypes from 'prop-types';

import { Image, Name, Link } from './style';

const Drawer = (props) => {
  const { name, to, heading } = props;
  return (
    <Link to={to} activeClassName="active" aria-labelledby={to}>
      <Image />
      <Name id={to} is={heading}>
        {name}
      </Name>
    </Link>
  );
};

Drawer.propTypes = {
  name: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  heading: PropTypes.string,
};

Drawer.defaultProps = {
  heading: 'div',
};

export default Drawer;
