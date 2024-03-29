import * as React from 'react';
import { baseShadow } from '../styles';
import { connect } from 'react-redux';

class MCInput extends React.Component<{
    width?: number,
    placeholder?: string,
    onChange?: any,
    value?: string,
}> {

    public state = { value: '' };

    private style = (self: MCInput) => ({
        input: {
            ...baseShadow, // This a static mixin
            width: self.props.width ? self.props.width : 50,
            flex: 1,
            border: 0,
            margin: '0px 5px',
            borderRadius: 1,
        }
    })

    public render() {
        return (
            <input
                type="text"
                value={this.props.value}
                style={this.style(this).input}
                placeholder={this.props.placeholder}
                onChange={(event) => this.props.onChange ? this.props.onChange(event) : null}
            />
        );
    }
}

export default connect(null, (dispatch, props) => ({}))(MCInput);