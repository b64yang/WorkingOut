import {combineReducers} from 'redux';

import UserList from './UserListReducer.js';
import Select from './SelectReducer.js';

export const rootReducer = combineReducers({
    UserList,
    Select
});

export default rootReducer;