import { createStore, combineReducers } from 'redux';

import dictionaryReducer from './dictionary.reducer';

const appReducer = combineReducers({
  dictionary: dictionaryReducer,
});

const store = createStore(appReducer);

export default store;
