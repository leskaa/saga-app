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
import { GlobalContext } from './GlobalStore';
import TeacherCourseInfoPage from '../pages/TeacherCourseInfoPage';
import NewMessagePage from '../pages/NewMessagePage';
import TeacherAssignmentPage from '../pages/TeacherAssignmentPage';
import StudentAssignmentPage from '../pages/StudentAssignmentPage';
import InboxPage from '../pages/InboxPage';
import ShopPage from '../pages/ShopPage';
import { User } from '../general/types';

// Render Layout with Sidenav and stuff because user is authenticated
function renderAuthRoute(children: React.ReactElement): React.ReactElement {
  return <AuthPageLayout>{children}</AuthPageLayout>;
}

function renderNoAuthRoute(children: React.ReactElement): React.ReactElement {
  return <NoAuthPageLayout>{children}</NoAuthPageLayout>;
}

// Add routes where user should only be able to access when they are authenticated
function AuthenticatedUserRoutes(
  isUserAuthenticated: boolean,
  user: User
): React.ReactElement {
  const { isTeacher } = user;

  return isUserAuthenticated ? (
    <>
      <Route path="/adventuremap">
        <Route path=":courseId" element={renderAuthRoute(<MapPage />)} />
      </Route>
      <Route
        path="/character"
        element={renderAuthRoute(<CharacterContentPage />)}
      />
      <Route path="/adventures" element={renderAuthRoute(<MyCoursesPage />)} />
      <Route path="questboard" element={renderAuthRoute(<MyCalendarPage />)} />
      <Route path="/shop" element={renderAuthRoute(<ShopPage />)} />
      <Route path="/adventure">
        <Route
          path=":courseId"
          element={renderAuthRoute(<TeacherCourseInfoPage />)}
        />
      </Route>
      <Route path="viewquest">
        <Route path=":courseId">
          <Route
            path=":assignmentId"
            element={renderAuthRoute(<TeacherAssignmentPage />)}
          />
        </Route>
      </Route>
      <Route path="quest">
        <Route
          path=":questId"
          element={renderAuthRoute(<StudentAssignmentPage />)}
        />
      </Route>
      <Route path="/newletter" element={renderAuthRoute(<NewMessagePage />)} />
      <Route path="/mailbox" element={renderAuthRoute(<InboxPage />)} />
      <Route path="/*" element={<Navigate replace to="/" />} />
      {/* Routes that only teachers can access */}
      {isTeacher && (
        <>
          <Route path="/adventure">
            <Route
              path=":courseId"
              element={renderAuthRoute(<TeacherCourseInfoPage />)}
            />
          </Route>
          <Route
            path="viewquest"
            element={renderAuthRoute(<TeacherAssignmentPage />)}
          />
        </>
      )}
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
      <Route path="/studentsignup">
        <Route
          path=":verificationCode"
          element={renderNoAuthRoute(<StudentSignUpPage />)}
        />
      </Route>
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
  const user = globalState.loggedInUser;

  return (
    <Routes>
      {/** TODO: Only render Authenticated User Routes if User is Logged In */}
      {user && AuthenticatedUserRoutes(globalState?.isUserAuthenticated, user)}
      {NotAuthenticatedUserRoutes()}
    </Routes>
  );
}

export default BrowserRoutes;
