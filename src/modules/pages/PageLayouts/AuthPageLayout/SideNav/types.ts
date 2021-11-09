export interface SideNavProps {
  onRequestSupportClick: () => void;
}

export const SIDENAV_PATH_MAP = new Map([
  ["_home", "/myadventures"],
  ["_viewalladventures", "/myadventures"],
  ["_mycharacter", "/mycharacter"],
  ["_questboard", "/myquestboard"]
])