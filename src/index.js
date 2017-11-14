import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './fonts/oticon-icon-www.css';

/**
 * Icon
 * @param color
 * @param icon
 * @param fontSize
 * @returns {XML}
 * @constructor
 */
const Icon = ({ color, icon, fontSize }) => {
  const inlineStyles = { color, fontSize };
  return <span className={cn(styles.icomoon, styles[icon])} style={inlineStyles} />;
};

/**
 * defaultProps
 * @type {{color: string, icon: string, fontSize: string}}
 */
Icon.defaultProps = {
  color: "#000",
  icon: "icon-budicon-info",
  fontSize: "24px",
};

/**
 * propTypes
 * @type {{color: shim, icon: *, fontSize: shim}}
 */
Icon.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string.isRequired,
  fontSize: PropTypes.string,
};

export default Icon;
