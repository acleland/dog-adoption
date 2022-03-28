import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './views/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact to="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
