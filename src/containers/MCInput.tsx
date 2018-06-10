import * as React from 'react';
import { baseShadow } from '../styles';
import { connect } from 'react-redux';

class MCInput extends React.Component<{
    width?: number,
    placeholder?: string
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
                style={this.style(this).input}
                placeholder={this.props.placeholder}
                onChange={(event) => this.setState({
                    value: event.target.value
                })}
            />
        );
    }
}

export default connect(null, (dispatch, props) => ({}))(MCInput);