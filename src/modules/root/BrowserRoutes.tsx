import React, { useContext } from 'react';
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import LandingPage from "../pages/LandingPage";
import SignInPage from "../pages/SignInPage";
import InstructorSignUpPage from "../pages/InstructorSignUpPage";
import StudentSignUpPage from "../pages/StudentSignUpPage";
import SignUpConfirmationPage from "../pages/SignUpConfirmationPage";
import PageLayout from "../pages/PageLayout";
import MapPage from "../pages/MapPage";
import AddAssignmentPage from "../pages/AddAssignmentPage";
import CharacterContentPage from "../pages/CharacterContent";
import CourseContentPage from '../pages/CourseContent/Component';
import { GlobalContext } from "../root/GlobalStore";

// Render Layout with Sidenav and stuff because user is authenticated
function renderAuthRoute(children: React.ReactElement): React.ReactElement {
  return (
    <PageLayout>
      {children}
    </PageLayout>
  )
}

// Add routes where user should only be able to access when they are authenticated
function AuthenticatedUserRoutes(isUserAuthenticated: boolean): React.ReactElement {
  return isUserAuthenticated ? (
    <React.Fragment>
      <Route path="/map" element={renderAuthRoute(<MapPage/>)} />
      <Route path="/mycharacter" element={renderAuthRoute(<CharacterContentPage/>)} />
      <Route path="/addassignment" element={renderAuthRoute(<AddAssignmentPage />)} />
      <Route path="/mycourses" element={renderAuthRoute(<CourseContentPage />)} />
      <Route path="/*" element={<Navigate replace to="/" />}/>
    </React.Fragment>
  ) : <Route path="/*" element={<Navigate replace to="/signin" />}/>
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
  const { globalState } = useContext(GlobalContext);

  return (
    <Routes>
      {/** TODO: Only render Authenticated User Routes if User is Logged In */}
      {AuthenticatedUserRoutes(globalState?.isUserAuthenticated)}
      {NotAuthenticatedUserRoutes()}
    </Routes>
  )
}


export default BrowserRoutes;