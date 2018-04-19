import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { Router, Route, browserHistory } from 'react-router';
import reducers from './reducers';
import Home from './components/home/Home';
import NotFound from './components/shared/notFound/NotFound';
import CharacterDetail from './components/character/CharacterDetail';
import './index.css';

const store = createStore(reducers,
    applyMiddleware(logger));

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path='/' exact component={Home}/>
            <Route path='/character/:id' component={CharacterDetail}/>
            <Route path='**' component={NotFound}/>
        </Router>
    </Provider>, document.getElementById('root'));
