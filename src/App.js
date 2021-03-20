import "bootstrap/dist/css/bootstrap.min.css";
import { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import DestinationDetailInfo from "./components/DestinationDetailInfo/DestinationDetailInfo";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
export const userContext = createContext();

function App() {
  const [logout, setLogout] = useState({});
  const [loggedInUser, setLoggedInUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    password: "",
    success: false,
    error: "",
  });
  return (
    <userContext.Provider
      value={[loggedInUser, setLoggedInUser, logout, setLogout]}
    >
      <div>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            {/* <PrivateRoute path="/destination/:rideType">
              <DestinationDetail></DestinationDetail>
            </PrivateRoute> */}
            <PrivateRoute path="/destination/:rideType">
              <DestinationDetailInfo></DestinationDetailInfo>
            </PrivateRoute>
          </Switch>
        </Router>
      </div>
    </userContext.Provider>
  );
}

export default App;
