import { combineReducers } from 'redux';
import bugReducer from '../reducers/bug';

const allReducers = combineReducers({
    bug: bugReducer
});

export default allReducers;