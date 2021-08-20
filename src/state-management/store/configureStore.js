import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '../reducers';
import sagas from '../sagas';
import thunk from 'redux-thunk';

export default function configureStore() {
    const sagaMiddleware = createSagaMiddleware();


    // SAGA
    const middleware = composeWithDevTools(applyMiddleware(
        sagaMiddleware,
    ));



    //THUNK
    // const middleware = composeWithDevTools(applyMiddleware(
    //     thunk,
    // ));

    const store = createStore(
        reducers,
        middleware,
    );

    store.runSaga = sagaMiddleware.run;
    store.close = () => store.dispatch(END);

    sagaMiddleware.run(sagas);

    return store;
}
