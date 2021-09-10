import React from 'react';
import cx from 'classnames';

export default class extends React.Component<any> {
  render() {
    const { className, header, children, ...props } = this.props;
    return (
      <div className={cx('tui-panel', className)} {...props}>
        {header && <header className="tui-panel-header">{header}</header>}
        {children && <div className="tui-panel-body">{children}</div>}
      </div>
    );
  }
}
