import React from 'react';
import PropTypes from 'prop-types';
import styles from './fonts/Icons.css';

/**
 * Icons
 * @param color
 * @param icon
 * @param fontSize
 * @returns {XML}
 * @constructor
 */
export const Icons = ({ color, icon, fontSize }) => {
  const inlineStyles = { color, fontSize };
  return <span className={cn(styles.icomoon, styles[icon])} style={inlineStyles} />;
};

/**
 * defaultProps
 * @type {{color: string, icon: string, fontSize: string}}
 */
Icons.defaultProps = {
  color: "#000",
  icon: "icon-budicon-info",
  fontSize: "24px",
};

/**
 * propTypes
 * @type {{color: shim, icon: *, fontSize: shim}}
 */
Icons.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string.isRequired,
  fontSize: PropTypes.string,
};
