/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';

function ButtonLink({ href, className, children }) {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}

ButtonLink.defaultProps = {
  href: '/',
  className: '',
};

ButtonLink.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default ButtonLink;
