import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@feizheng/noop';
import objectAssign from 'object-assign';

const CLASS_NAME = 'react-svg-icon';

export default class ReactSvgIcon extends Component {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * The main(prefix) icon class.
     */
    iconClass: PropTypes.string,
    /**
     * The icon name.
     */
    value: PropTypes.string,
    /**
     * The icon size(font-size).
     */
    size: PropTypes.number
  };

  static defaultProps = {
    iconClass: 'icon'
  };

  render() {
    const { iconClass, className, value, size, style, ...props } = this.props;
    const _style = objectAssign({ fontSize: size }, style);
    return (
      <svg
        aria-hidden="true"
        data-component={CLASS_NAME}
        style={_style}
        className={classNames(iconClass, CLASS_NAME, className)}
        {...props}>
        <use xlinkHref={`#${value}`} />
      </svg>
    );
  }
}
