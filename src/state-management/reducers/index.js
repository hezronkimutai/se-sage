import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';


// REDUCERS

import search from './search';

const appReducer = combineReducers({
    router: routerReducer,
    search,
});

export default appReducer;
