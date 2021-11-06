import React from 'react';
import {
  Routes,
  Route,
  Link,
} from "react-router-dom";

import LandingPage from "../pages/LandingPage/index";

function BrowserRoutes() {

  return (
    <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/signin" />
      <Route path="/signup" />


      <Route path="/about"/>

    </Routes>
  )
}


export default BrowserRoutes;