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
import MainContainer from './pages/main/MainContainer'

const routes = (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
            <Switch>
              <Route path='/signin' component={SigninContainer} exact />
              <AuthorizedRoute path='/' component={MainContainer} exact />
              <Redirect from='*' to='/' />
            </Switch>
        </Router>
      </PersistGate>
    </Provider>
  )
  
  export default routes
  