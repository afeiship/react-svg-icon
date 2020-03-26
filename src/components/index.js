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
    value: PropTypes.string
  };

  static defaultProps = {
    iconClass: 'icon'
  };

  render() {
    const { iconClass, className, value, ...props } = this.props;
    return (
      <svg
        aria-hidden="true"
        data-component={CLASS_NAME}
        className={classNames(iconClass, CLASS_NAME, className)}
        {...props}>
        <use xlinkHref={`#${value}`} />
      </svg>
    );
  }
}
