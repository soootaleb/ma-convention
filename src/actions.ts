import { INotification, ITodo } from './interfaces';
import { MCActionsTypes } from './enumerations';

// TODO 
export const addTodo = (todo: ITodo) => ({
    type: MCActionsTypes.ADD_TODO,
    payload: todo
});

export const completeTodo = (todo: ITodo) => ({
    type: MCActionsTypes.COMPLETE_TODO,
    payload: todo
});

// Application 
export const addNotification = (notification: INotification) => ({
    type: MCActionsTypes.ADD_NOTIFICATION,
    payload: notification
});

export const removeNotification = (notification: INotification) => ({
    type: MCActionsTypes.REMOVE_NOTIFICATION,
    payload: notification
});