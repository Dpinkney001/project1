import React from "react";
import "C:\Users\thees\OneDrive\Desktop\project1\project1\src\index.html";
import "C:\Users\thees\OneDrive\Desktop\project1\project1\src\HobbyPage.html";
import "C:\Users\thees\OneDrive\Desktop\project1\project1\src\PastJobsPage.html";
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
              <Link to="C:\Users\thees\OneDrive\Desktop\project1\project1\src\index.html">Home</Link>
            </li>
            <li>
              <Link to="C:\Users\thees\OneDrive\Desktop\project1\project1\src\HobbyPage.html">Hobby Page</Link>
            </li>
            <li>
              <Link to="C:\Users\thees\OneDrive\Desktop\project1\project1\src\PastJobsPage.html">Past Jobs Page</Link>
            </li>
          </ul>
        </nav>
