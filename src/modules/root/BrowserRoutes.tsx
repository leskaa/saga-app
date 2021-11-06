import React from 'react';
import {
  Routes,
  Route,
  Link,
} from "react-router-dom";

import LandingPage from "../pages/LandingPage/index";
import SignInPage from "../pages/SignInPage/index";

function BrowserRoutes() {

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" />


      <Route path="/about" />

    </Routes>
  )
}


export default BrowserRoutes;