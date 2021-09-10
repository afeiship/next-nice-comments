import React from 'react';
import cx from 'classnames';
import { THEME } from '../../types/main';

export interface BackgroundProps extends React.AllHTMLAttributes<HTMLElement> {
  value?: THEME;
}

export default class extends React.Component<any> {
  public static defaultProps = {
    value: THEME.BLUE_BLACK
  };

  render() {
    const { className, value, ...props } = this.props;
    return <div className={cx(`tui-bg-${value}`, className)} {...props} />;
  }
}
