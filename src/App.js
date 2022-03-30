import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import DogDetail from './views/DogDetail/DogDetail';
import Home from './views/Home/Home';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Switch>
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
