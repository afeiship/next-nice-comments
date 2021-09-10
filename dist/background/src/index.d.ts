import React from 'react';
export interface BackgroundProps extends React.AllHTMLAttributes<HTMLElement> {
    value?: string;
}
export default class extends React.Component<any> {
    static defaultProps: {
        value: string;
    };
    render(): JSX.Element;
}
