import * as React from 'react';
import { baseShadow } from '../styles';
import { ITodo, INotification } from '../interfaces';
import { MCActionsTypes, MCNotificationLevel } from '../enumerations';
import { connect } from 'react-redux';
import { addTodo, addNotification } from '../actions';
import { flexColCenter } from '../styles';

class MCConvention extends React.Component<{
    onAdd: (todo: ITodo) => ({ type: MCActionsTypes, payload: ITodo })
    onEmpty: () => ({ type: MCActionsTypes, payload: INotification })
}> {

    public state = { value: '' };

    private style = (self: MCConvention) => ({
        root: {
            ...baseShadow,
            position: 'relative' as 'relative'
        },
        image: {
            height: '70%'
        },
        content: {
            position: 'absolute' as 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'white',

            ...flexColCenter,
        }
    })

    public render() {
        return (
            <div style={this.style(this).root}>
                <img
                    style={this.style(this).image}
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                />
                <div style={this.style(this).content} >
                    Contention
                </div>
            </div>
        );
    }
}

export default connect(null, (dispatch, props) => ({
    onAdd: (todo: ITodo) => {
        dispatch(addNotification({
            level: MCNotificationLevel.SUCCESS,
            header: 'Yeah !',
            content: 'Todo added in your list'
        }));
        dispatch(addTodo(todo));
    },
    onEmpty: () => dispatch(addNotification({
        level: MCNotificationLevel.WARNING,
        header: 'Oops !',
        content: 'Please insert a label for your ticket'
    }))
}))(MCConvention);