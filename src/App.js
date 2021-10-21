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
import Footer from './components/Footer/Footer';
import Training from './components/Training/Training';
import About from './components/About/About';
import Register from './components/Register/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/services">
              <Services></Services>
            </PrivateRoute>
            <Route path="/service/:serviceId">
              <Detail></Detail>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/personal">
              <Training></Training>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div >
  );
}

export default App;
