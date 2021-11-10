import { Dispatch } from 'react';
import { User } from '../general/types';

export interface ContextWrapperProps {
  children: React.ReactElement;
}

export interface GlobalStateInterface {
  isUserAuthenticated: boolean;
  loggedInCookie: string;
  loggedInUser: User | null;
  persistenceType: string;
}

export type ActionType = {
  type: string;
  payload?: any;
};

export type ContextType = {
  globalState: GlobalStateInterface;
  dispatch: Dispatch<ActionType>;
};
