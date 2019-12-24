import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@feizheng/noop';
import objectAssign from 'object-assign';

const CLASS_NAME = 'react-svg-icon';

export default class extends Component {
  static displayName = CLASS_NAME;
  static propTypes = {
    iconClass: PropTypes.string,
    className: PropTypes.string,
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
