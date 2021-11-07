import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";

import LandingPage from "../pages/LandingPage";
import SignInPage from "../pages/SignInPage";
import InstructorSignUpPage from "../pages/InstructorSignUpPage";
import StudentSignUpPage from "../pages/StudentSignUpPage";
import SignUpConfirmationPage from "../pages/SignUpConfirmationPage";
import PageLayout from "../pages/PageLayout";
import MapPage from "../pages/MapPage";
import AddAssignmentPage from "../pages/AddAssignmentPage";

const isAuthenticated: boolean = true; //HARD CODED TRUE FOR DEVELOPMENT -- To change when user can login
// Render Layout with Sidenav and stuff because user is authenticated
function renderAuthRoute(children: React.ReactElement): React.ReactElement {
  return (
    <PageLayout>
      {children}
    </PageLayout>
  )
}

// Add routes where user should only be able to access when they are authenticated
function AuthenticatedUserRoutes(): React.ReactElement {

  return (
    <React.Fragment>
      <Route path="/map" element={renderAuthRoute(<MapPage />)} />
      <Route path="/addassignment" element={renderAuthRoute(<AddAssignmentPage />)} />
    </React.Fragment>
  )
}

function NotAuthenticatedUserRoutes(): React.ReactFragment {
  return (
    <React.Fragment>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/instructorsignup" element={<InstructorSignUpPage />} />
      <Route path="/studentsignup" element={<StudentSignUpPage />} />
      <Route path="/confirmation" element={<SignUpConfirmationPage />} />
      <Route path="/about" />
    </React.Fragment>
  )
}

function BrowserRoutes() {
  return (
    <Routes>
      {/** TODO: Only render Authenticated User Routes if User is Logged In */}
      {isAuthenticated && AuthenticatedUserRoutes()}
      {NotAuthenticatedUserRoutes()}
    </Routes>
  )
}


export default BrowserRoutes;