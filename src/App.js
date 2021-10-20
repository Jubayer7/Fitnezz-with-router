import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Banner from './components/Banner/Banner';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Support from './components/Support/Support';
import Notfound from './components/NotFound/Notfound';
import Services from './components/Services/Services';
import Service from './components/Service/Service';
import Detail from './components/Detail/Detail';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/service/:serviceId">
            <Detail></Detail>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/support">
            <Support></Support>
          </Route>
          <Route path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
