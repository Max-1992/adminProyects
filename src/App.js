// Native React
import React from 'react';

// Routing 
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Context
import ProjectState from './context/projects/projectState';
import TaskState from './context/tasks/taskState';
import AlertState from './context/alert/alertState';
import AuthState from './context/auth/authState';

// Components
import Login from './components/auth/Login/Login';
import Signup from './components/auth/Signup/Signup';
import Projects from './components/projects/Projects';

// Services
import authToken from './services/authToken';

// Guards
import AuthGuard from './guards/authGuard'

// Check if there is a token in the localStorage.
const token = localStorage.getItem('token');
if(token) {
  authToken(token);
};

function App() {
  return (
    <AuthState>
      <ProjectState>
          <TaskState>
            <AlertState>
              <BrowserRouter>
                <Switch>
                  <Route exact path="/" component={Login} ></Route>
                  <Route exact path="/signup" component={Signup} ></Route>
                  <AuthGuard exact path="/projects" component={Projects} />
                </Switch>
              </BrowserRouter>
            </AlertState>
          </TaskState>
        </ProjectState>
    </AuthState>
 
  );
}

export default App;
