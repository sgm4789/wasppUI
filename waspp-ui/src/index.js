import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import editUserReducer from './store/reducers/editUserReducer';
import editAdjustmentsReducer from './store/reducers/editAdjustmentsReducer';
import editAfterFloorAdjustmentsReducer from './store/reducers/editAfterFloorAdjustmentsReducer';
import OPCODefaultsReducer from './store/reducers/OPCODefaultsReducer';
import thunk from 'redux-thunk';
import notificationReducer from "./store/reducers/notificationReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    editUsers: editUserReducer,
    editAdjustments: editAdjustmentsReducer,
    editAfterFloorAdjustments: editAfterFloorAdjustmentsReducer,
    opcoDefaults: OPCODefaultsReducer,
    notifications: notificationReducer
});

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
