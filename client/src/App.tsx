import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Chat from './components/Chat/Chat';
import JoinRoom from './components/JoinRoom/JoinRoom';
import './App.css';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={JoinRoom} />
      <Route path='/chat' component={Chat} />
    </Switch>
  </BrowserRouter>
);

export default App;
