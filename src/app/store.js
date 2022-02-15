import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import announcementReducer from '../features/Announcement/reducer';
import jobReducer from '../features/Job/reducer';
import companyReducer from '../features/Company/reducer';

import thunk from 'redux-thunk';

const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducers = combineReducers({
    announcements: announcementReducer,
    jobs: jobReducer,
    companies: companyReducer,
});

const store = createStore(rootReducers, composerEnhancer(applyMiddleware(thunk)));
export default store