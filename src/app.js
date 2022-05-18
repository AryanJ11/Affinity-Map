import React from 'react';
import ReactDom from 'react-dom';
import './styles/styles.scss'
import 'normalize.css/normalize.css';
import Affinity from './components/Affinity';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
// import { addNote } from './actions/notes';
// import { setFilterBucket, sortByBucket } from './actions/filters';
// import visibleNotes from './selectors/visibleNotes';

const store = configureStore();

// store.dispatch(addNote({desc: "First Note"}));
// store.dispatch(addNote({desc: "Second Note", bucket: "11"}));
// store.dispatch(addNote({desc: "Third Note", bucket: "1"}));

// const state = store.getState();

// const vis = visibleNotes(state);
// console.log(vis);

// console.log(store.getState());

const jsx = (
    <Provider store = {store}>
        <Affinity />
    </Provider>
);

ReactDom.render(
    jsx, 
    document.getElementById('app')
);