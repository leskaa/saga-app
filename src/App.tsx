import React from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import BrowserRoutes from "./modules/root/BrowserRoutes";


function App() {
  return (
    <React.Fragment>
      <Router>
        <BrowserRoutes/>
      </Router>
    </React.Fragment>
  );

}

export default App;