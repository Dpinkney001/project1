import React from "react";
import "./Profile.js";
import "./src/HobbyPage.js";
import "./src/PastJobsPage.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="src\profile.js">Home</Link>
            </li>
            <li>
              <Link to="src\HobbyPage.js">Hobby Page</Link>
            </li>
            <li>
              <Link to="src\PastJobsPage.js">Past Jobs Page</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about">
            <Profile />
          </Route>
          <Route path="/users">
            <HobbyPage />
          </Route>
          <Route path="/">
            <PastJobsPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

  function HobbyPage() {
    return <h2>HobbyPage</h2>;
  }
  
  function Profile() {
    return <h2>Profile</h2>;
  }
  
  function PastJobsPage() {
    return <h2>PastJobsPage</h2>;
  }
  