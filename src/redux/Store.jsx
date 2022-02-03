import { createStore } from 'redux';
import reducer from './reducer/index';

const initialState = {
    todos:[
        {
            id: 0,
            name: 'Ir al gym',
            complete: false
        },
        {
            id: 1,
            name: 'Lavar la ropa',
            complete: true
        },
    ],
};

export const store = createStore(
    reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)