import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './pages/Login/index'
import Register from './pages/Register/index'



const App = () => {
  return (
    <BrowserRouter>

      <Switch>
        <Route exact path="/" component={Login} />
       <Route exact path="/register" component={Register} />
      </Switch>

    </BrowserRouter>
  )
}



export default App;
