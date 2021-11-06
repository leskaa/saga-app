import { render } from '@testing-library/react';
import React from 'react';
import {
  Routes,
  Route,
  Link,
} from "react-router-dom";


const renderLandingPage = () => {
  return (
    <React.Fragment>
      <div>
        <header className="App-header">
          <h1>
            Enter Your Saga
          </h1>
        </header>
      </div>
    </React.Fragment>
  )
}
function BrowserRoutes() {

  return (
    <Routes>
      <Route path="/" element={renderLandingPage()} />

      <Route path="/about"/>

    </Routes>
  )
}


export default BrowserRoutes;