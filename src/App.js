import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import DogDetail from './views/DogDetail/DogDetail';
import Home from './views/Home/Home';
import Nav from './components/Nav/Nav';
import Auth from './views/Auth/Auth';
import Admin from './views/Admin/Admin';
import Edit from './views/Edit/Edit';

import { getUser } from './services/users';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser());

  return (
    <div className="App">
      <BrowserRouter>
        <Nav {...{ currentUser, setCurrentUser }} />
        <Switch>
          <Route exact path="/auth">
            <Auth setCurrentUser={setCurrentUser} />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/admin">{currentUser ? <Admin /> : <Redirect to="/auth" />}</Route>
          <Route exact path="/dogs/:id/edit">
            {currentUser ? <Edit /> : <Redirect to="/auth" />}
          </Route>
          <Route exact path="/dogs/:id">
            <DogDetail currentUser={currentUser} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
