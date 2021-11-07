import React, { createContext, useEffect, useReducer, useRef } from 'react';
import Reducer from './reducer';
import { ContextType, GlobalStateInterface } from './types';
export const GlobalContext = createContext({} as ContextType);

export const initialState: GlobalStateInterface = {
  isUserAuthenticated: true, //TODO CHANGE TO FALSE - THEY SHOULD NOT BE ABLE TO GO TO AUTH PAGES IF NOT LOGGED IN
  loggedInCookie: "",
  loggedInUser: null,
  persistenceType: "sessionStorage"
};

function initializeState() {

  if (typeof (Storage) !== "undefined") {
  } else {
    throw new Error("You need to enable Storage to run Saga.")
  }

  const fromLocalStorage = JSON.parse(localStorage.getItem("globalState") as string);
  const fromSessionStorage = JSON.parse(sessionStorage.getItem("globalState") as string);
  return fromSessionStorage || fromLocalStorage || initialState;
}

export function GlobalStore({ children }: { children: React.ReactNode}): React.ReactElement {

  const [globalState, dispatch] = useReducer(Reducer, initializeState());
  const initialRenderGlobalState = useRef(true);
  const initialRenderPersistenceType = useRef(true);

  useEffect(() => {
    /*
      Populate SessionStorage or LocalStorage based on PersistenceType
    */

    if (initialRenderGlobalState.current) {
      initialRenderGlobalState.current = false;
      return;
    }

    const getPersistenceType = globalState.persistenceType;

    if (getPersistenceType === "sessionStorage") {
      sessionStorage.setItem("globalState", JSON.stringify(globalState));
    } else if (getPersistenceType === "localStorage") {
      localStorage.setItem("globalState", JSON.stringify(globalState));
    }
  }, [globalState]);

  useEffect(() => {
    /*
      Purge SessionStorage or LocalStorage when one is chosen
    */

    if (initialRenderPersistenceType.current) {
      initialRenderPersistenceType.current = false;
      return;
    }

    const getPersistenceType = globalState.persistenceType;
    if (getPersistenceType === "sessionStorage") {
      localStorage.removeItem("globalState");
    } else if (getPersistenceType === "localStorage") {
      sessionStorage.removeItem("globalState");
    }
  }, [globalState.persistenceType]);


  return (
  <GlobalContext.Provider value={{globalState, dispatch}}>
    {children}
  </GlobalContext.Provider>
  );

}