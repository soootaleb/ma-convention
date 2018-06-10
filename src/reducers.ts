import initial from './states';
import { MCActionsTypes as AT } from './enumerations';

const map = {};

map[AT.ADD_TODO] = (state, action) => ({
    ...state,
    todos: [...state.todos, action.payload]
});

map[AT.COMPLETE_TODO] = (state, action) => ({
        ...state,
        todos: state.todos.filter(todo => todo !== action.payload)    
});

map[AT.ADD_NOTIFICATION] = (state, action) => ({
    ...state,
    notifications: [...state.notifications, action.payload]
});

map[AT.REMOVE_NOTIFICATION] = (state, action) => ({
    ...state,
    notifications: state.notifications.filter(notification => notification !== action.payload)
});

export default (state = initial, action) => {
    if (Object.keys(map).indexOf(action.type) > - 1) {
        return map[action.type](state, action);
    } else {
        return state;
    }
};