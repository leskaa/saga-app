import React from 'react';
import './App.less';
import { BrowserRouter as Router } from "react-router-dom";
import BrowserRoutes from "./modules/root/BrowserRoutes";
import { GlobalStore } from "./modules/root/GlobalStore";

function App(): React.ReactElement {
  return (
    <GlobalStore>
      <Router>
        <BrowserRoutes/>
      </Router>
    </GlobalStore>
  );

}

export default App;