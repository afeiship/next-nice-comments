import React from 'react';
import cx from 'classnames';

export default class extends React.Component<any> {
  render() {
    const { className, children, ...props } = this.props;
    return (
      <label className={cx('tui-checkbox', className)} {...props}>
        {children}
        <input type="checkbox" />
        <span></span>
      </label>
    );
  }
}
