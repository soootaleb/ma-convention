import * as React from 'react';
import { MCActionsTypes } from '../enumerations';
import { ITodo } from '../interfaces';
import MCButton from './MCButton';
import { baseShadow } from '../styles';

export default class MCElement extends React.Component<{
    todo: ITodo,
    onCompleteClicked: (todo: ITodo) => { type: MCActionsTypes, payload: ITodo }
}> {

    private style = (self: MCElement) => ({
        root: {
            ...baseShadow,
            borderRadius: 3,
            width: '100%',
            paddingLeft: 10,
            listStyleType: 'none',
            display: 'flex',
            justifyContent: 'space-between' as 'space-between',
            alignItems: 'center' as 'center',
            position: 'relative' as 'relative',
            marginTop: 10,
            backgroundColor: 'white'
        }
    })

    private completedClicked = (todo: ITodo) => {
        this.props.onCompleteClicked(this.props.todo);
    }

    public render() {
        return (
            <li style={this.style(this).root} >
                {this.props.todo.label}
                <MCButton label="Complete" onClick={this.completedClicked} />
            </li>
        );
    }
}