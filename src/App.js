import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './pages/Login/index'



const App = () => {
  return (
    <BrowserRouter>

      <Switch>
        <Route exact path="/" component={Login} />
       
      </Switch>

    </BrowserRouter>
  )
}



export default App;
