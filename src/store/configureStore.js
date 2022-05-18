import {combineReducers, createStore} from 'redux';
import notesReducer from '../reducers/notes'
import filtersReducer from '../reducers/filters'

const configureStore = () => {
    const store = createStore(combineReducers({
            notes: notesReducer,
            filters: filtersReducer
        })
    );

    return store;
}

export default configureStore;