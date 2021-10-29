import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import store from "./store";
import "./assets/scss/base.scss";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./page/Home";
import Menu from "./page/Menu";
import Cart from "./page/Cart";
import Booking from "./page/Booking";
import Location from "./page/Location";
import Login from "./page/Login";
import Register from "./page/Register";
import Order from "./page/Order";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <main>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/menu">
              <Menu />
            </Route>
            <Route path="/booking">
              <Booking />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/location">
              <Location />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/order">
              <Order />
            </Route>
          </Switch>
          <Footer />
        </main>
      </Router>
    </Provider>
  );
}

export default App;
