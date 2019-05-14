import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import ReactGA from 'react-ga';

import * as CONSTANTS from './data/config/constants';

import App from './app';
import PageContainer from './app/pagecontainer';
import Dashboard from './app/pagecontainer/modules/dashboard';

ReactGA.initialize("ga-0008-your-id");

function logPageView() {
    ReactGA.pageview(window.location.pathname + window.location.search);
}

export default class Root extends Component {
    render() {
        const { store, history } = this.props;
        return (
            <Provider store={store}>
                <ConnectedRouter history={history} onChange={logPageView}>
                    <App>
                        <Switch>
                            <PageContainer>
                                <Switch>
                                    <Route exact path={CONSTANTS.ROUTE_PATH.DASHBOARD} component={Dashboard} />
                                </Switch>
                            </PageContainer>
                        </Switch>
                    </App>
                </ConnectedRouter>
            </Provider>
        );
    }
}

Root.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};
