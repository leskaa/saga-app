export interface SideNavProps {
  onRequestSupportClick: () => void;
}

export const SIDENAV_PATH_MAP = new Map([
  ['_home', '/adventures'],
  ['_viewalladventures', '/adventures'],
  ['_mycharacter', '/character'],
  ['_questboard', '/questboard'],
]);
