import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './components/About/About';
import AllServices from './components/AllServices/AllServices';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/services">
            <AllServices />
          </Route>
          <Route path="/details/:id">
            <ServiceDetails />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
