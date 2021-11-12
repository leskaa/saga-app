export interface SideNavProps {
  onRequestSupportClick: () => void;
}

export const SIDENAV_PATH_MAP = new Map([
  ['_home', '/adventures'],
  ['_viewalladventures', '/adventures'],
  ['_character', '/character'],
  ['_questboard', '/questboard'],
  ['_mailbox', '/mailbox'],
]);
