import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import DogDetail from './views/DogDetail/DogDetail';
import Home from './views/Home/Home';
import Nav from './components/Nav/Nav';
import Auth from './views/Auth/Auth';
import { getUser } from './services/users';
import { useState } from 'react';

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
          <Route path="/dogs/:id">
            <DogDetail />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
