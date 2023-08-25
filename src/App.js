import React from 'react';
import './App.css';
import ListAccounts from './components/ListAccounts';
import AddAccount from './components/AddAccount';
import ViewAccount from './components/ViewAccount';
import UpdateAccount from './components/UpdateAccount';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
  <main className="apps text-gray-400 bg-gray-900 body-font">
    <Router>
     <Switch>
      <Route exact path='/' component={ListAccounts}></Route>    
      <Route exact path='/accounts' component={ListAccounts}></Route>   
      <Route exact path='/add_account' component={AddAccount}></Route>   
      <Route exact path='/edit_account/:id' component={UpdateAccount}></Route>
      <Route exact path='/view_account/:id' component={ViewAccount}></Route>  
      </Switch>
    </Router>    
  </main>
  );
}

export default App;
