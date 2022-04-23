import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const currentUser = false;
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register" ><Register />
         {currentUser ? <Home /> : <Register />} 
        </Route>
        <Route path="/login">
         {currentUser ? <Home /> : <Login />} 
        </Route>
        <Route path="/write">
         {currentUser ? <Write /> : <Register />} 
        </Route>
        <Route path="/settings">
        {currentUser ? <Settings /> : <Register />}  
        </Route>
        <Route path="/post/:postId">
          <Single /> 
         </Route>
      </Switch>
    </Router>
  );
}

export default App;
