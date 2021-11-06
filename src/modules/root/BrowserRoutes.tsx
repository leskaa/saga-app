import React from 'react';
import {
  Routes,
  Route,
  Link,
} from "react-router-dom";

import LandingPage from "../pages/LandingPage";
import SignInPage from "../pages/SignInPage";
import PageLayout from "../pages/PageLayout";
import MapPage from "../pages/MapPage";
function BrowserRoutes() {

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" />
      <Route path="/about" />
      <Route path="/page" element={<PageLayout />} />
      <Route path="/map" element={<MapPage />} />
    </Routes>
  )
}


export default BrowserRoutes;