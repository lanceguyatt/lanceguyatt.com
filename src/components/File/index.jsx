import React from 'react';
import PropTypes from 'prop-types';

import { Image, Name, Link } from './style';

const File = ({ name, href }) => (
  <Link href={href}>
    <Image />
    <Name>{name}</Name>
  </Link>
);

File.propTypes = {
  name: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default File;
