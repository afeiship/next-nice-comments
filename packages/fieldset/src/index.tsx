import React from 'react';
import cx from 'classnames';

export default class extends React.Component<any> {
  render() {
    const { className, ...props } = this.props;
    return <fieldset className={cx('tui-fieldset', className)} {...props} />;
  }
}
