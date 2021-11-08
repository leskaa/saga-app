import React, { useContext } from 'react';
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import LandingPage from "../pages/LandingPage";
import SignInPage from "../pages/SignPages/SignInPage";
import InstructorSignUpPage from "../pages/SignPages/InstructorSignUpPage";
import StudentSignUpPage from "../pages/SignPages/StudentSignUpPage";
import SignUpConfirmationPage from "../pages/SignPages/SignUpConfirmationPage";
import AboutPage from "../pages/AboutPage";
import PageLayout from "../pages/PageLayouts/AuthPageLayout";
import MapPage from "../pages/CourseContentPages/MapPage";
import AddAssignmentPage from "../pages/CourseContentPages/AddAssignmentPage";
import CharacterContentPage from "../pages/CharacterContent";
import MyCoursesPage from '../pages/CourseContentPages/MyCoursesPage/Component';
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
      <Route path="/mycourses" element={renderAuthRoute(<MyCoursesPage />)} />
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
      <Route path="/about" element={<AboutPage />}/>
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