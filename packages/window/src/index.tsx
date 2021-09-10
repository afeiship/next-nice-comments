import React from 'react';
import cx from 'classnames';

export default class extends React.Component<any> {
  render() {
    const { className, value, ...props } = this.props;
    return <div className={cx('tui-window', className)} {...props} />;
  }
}
