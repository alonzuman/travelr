import React, { useEffect } from 'react';

// Pages
import Home from './Pages/Home/Home';
import Dashboard from './Pages/Dashboard/Dashboard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';

// Modals
import Login from './Modals/Auth/Login';
import Register from './Modals/Auth/Register';
import Alert from './Modals/Alerts/Alert';
import './App.css';

// Redux stuff
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from './actions'
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  const dispatch = useDispatch();
  const alert = useSelector(state => state.alert)

  useEffect(() => {
    dispatch(loadUser());
  }, [])

  return (
    <Router>
      <Navbar />
      {alert.isOn && <Alert />}
      <Switch>
        <div className='container'>
        <Route exact path='/' component={Home} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
