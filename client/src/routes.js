    import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'

import { store, persistor } from './store'
import AuthorizedRoute from './pages/authorizedRoute/AuthorizedRoute'
import SigninContainer from './pages/signin/SigninContainer'
import AppContainer from './pages/app/AppContainer'
import SignoutContainer from './pages/signout/SignoutContainer'
import MainFormContainer from './pages/main/MainFormContainer'

const routes = (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Router>
                <AppContainer>
                    <Switch>
                        <Route path='/signin' component={SigninContainer} exact />
                        <AuthorizedRoute path='/' component={MainFormContainer} exact />
                        <AuthorizedRoute path='/signout' component={SignoutContainer} exact />
                        <Redirect from='*' to='/' />
                    </Switch>
                </AppContainer>
            </Router>
        </PersistGate>
    </Provider>
)

export default routes
