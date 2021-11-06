import React from 'react';
import {
  Routes,
  Route,
  Link,
} from "react-router-dom";

import LandingPage from "../pages/LandingPage";
import SignInPage from "../pages/SignInPage";
import PageLayout from "../pages/PageLayout";
function BrowserRoutes() {

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" />
      <Route path="/about" />
      <Route path="/page" element={<PageLayout/>}/>
    </Routes>
  )
}


export default BrowserRoutes;