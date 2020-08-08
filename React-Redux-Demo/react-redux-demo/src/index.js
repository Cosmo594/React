import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger"
import thunk from "redux-thunk"
// import reducer from "./reducers/counter"
import {Provider} from "react-redux"
import rootReducer from "./reducers"

// const logger = store => next => action => {
//     console.log("dispatch->", action);
//     let result = next(action);
//     console.log("next state->", store.getState());
//     return result;
// }

// const error = store => next => action => {
//     try {
//         next(action)
//     } catch (e) {
//         console.log("error->", e)        
//     }
// }

// const store = createStore(rootReducer, {}, applyMiddleware(logger, error));
const store = createStore(rootReducer, {}, applyMiddleware(logger, thunk));
store.subscribe(() => console.log("state:",store.getState()))

// const render = () => {
//     ReactDOM.render(<App
//         onIncrement={ () => store.dispatch({ type:"INCREMENT" }) }
//         onDecrement={ () => store.dispatch({ type:"DECREMENT" }) }
//         value={store.getState()}
//     />, document.getElementById('root'));
// }
// render();
// store.subscribe(render)



ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));