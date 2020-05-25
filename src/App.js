import React from 'react';

// Routing 
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Components
import Login from './components/auth/Login/Login';
import Signup from './components/auth/Signup/Signup';
import Proyects from './components/proyects/Proyects';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} ></Route>
        <Route exact path="/signup" component={Signup} ></Route>
        <Route exact path="/proyects" component={Proyects} ></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
