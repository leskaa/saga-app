import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import LandingPage from '../pages/LandingPage';
import SignInPage from '../pages/SignPages/SignInPage';
import InstructorSignUpPage from '../pages/SignPages/InstructorSignUpPage';
import StudentSignUpPage from '../pages/SignPages/StudentSignUpPage';
import SignUpConfirmationPage from '../pages/SignPages/SignUpConfirmationPage';
import AboutPage from '../pages/AboutPage';
import AuthPageLayout from '../pages/PageLayouts/AuthPageLayout';
import NoAuthPageLayout from '../pages/PageLayouts/NoAuthPageLayout';
import MapPage from '../pages/CourseContentPages/MapPage';
import CharacterContentPage from '../pages/CharacterContentPage';
import MyCoursesPage from '../pages/CourseContentPages/MyCoursesPage/Component';
import MyCalendarPage from '../pages/MyCalendarPage';
import StudentGradesPage from '../pages/StudentGradesPage';
import { GlobalContext } from './GlobalStore';
import TeacherCourseInfoPage from '../pages/TeacherCourseInfoPage';

// Render Layout with Sidenav and stuff because user is authenticated
function renderAuthRoute(children: React.ReactElement): React.ReactElement {
  return <AuthPageLayout>{children}</AuthPageLayout>;
}

function renderNoAuthRoute(children: React.ReactElement): React.ReactElement {
  return <NoAuthPageLayout>{children}</NoAuthPageLayout>;
}

// Add routes where user should only be able to access when they are authenticated
function AuthenticatedUserRoutes(
  isUserAuthenticated: boolean
): React.ReactElement {
  console.log(isUserAuthenticated);
  return isUserAuthenticated ? (
    <>
      <Route path="/map" element={renderAuthRoute(<MapPage />)} />
      <Route
        path="/mycharacter"
        element={renderAuthRoute(<CharacterContentPage />)}
      />
      <Route path="/stars" element={renderAuthRoute(<StudentGradesPage />)} />
      <Route
        path="/myadventures"
        element={renderAuthRoute(<MyCoursesPage />)}
      />
      <Route
        path="/courseinfo"
        element={renderAuthRoute(<TeacherCourseInfoPage />)}
      />
      <Route
        path="myquestboard"
        element={renderAuthRoute(<MyCalendarPage />)}
      />
      <Route path="/*" element={<Navigate replace to="/" />} />
    </>
  ) : (
    <Route path="/*" element={<Navigate replace to="/signin" />} />
  );
}

function NotAuthenticatedUserRoutes(): React.ReactFragment {
  return (
    <>
      <Route path="/" element={renderNoAuthRoute(<LandingPage />)} />
      <Route path="/signin" element={renderNoAuthRoute(<SignInPage />)} />
      <Route
        path="/instructorsignup"
        element={renderNoAuthRoute(<InstructorSignUpPage />)}
      />
      <Route
        path="/studentsignup"
        element={renderNoAuthRoute(<StudentSignUpPage />)}
      />
      <Route
        path="/confirmation"
        element={renderNoAuthRoute(<SignUpConfirmationPage />)}
      />
      <Route path="/about" element={renderNoAuthRoute(<AboutPage />)} />
    </>
  );
}

function BrowserRoutes() {
  const { globalState } = useContext(GlobalContext);
  console.log(globalState);

  return (
    <Routes>
      {/** TODO: Only render Authenticated User Routes if User is Logged In */}
      {AuthenticatedUserRoutes(globalState?.isUserAuthenticated)}
      {NotAuthenticatedUserRoutes()}
    </Routes>
  );
}

export default BrowserRoutes;
