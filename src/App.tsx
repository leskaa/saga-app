import React from 'react';
import './App.less';
import { SWRConfig } from 'swr';
import { BrowserRouter as Router } from 'react-router-dom';
import BrowserRoutes from './modules/root/BrowserRoutes';
import { GlobalStore } from './modules/root/GlobalStore';

function App(): React.ReactElement {
  return (
    <SWRConfig
      value={{
        refreshInterval: 3000,
        fetcher: (resource, init) =>
          fetch(resource, { credentials: 'include' }).then((res) => res.json()),
      }}
    >
      <GlobalStore>
        <Router>
          <BrowserRoutes />
        </Router>
      </GlobalStore>
    </SWRConfig>
  );
}

export default App;
