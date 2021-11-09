export interface SideNavProps {
  onRequestSupportClick: () => void;
}

export const SIDENAV_PATH_MAP = new Map([
  ["_mycourses", "/mycourses"],
  ["_viewalladventures", "/mycourses"],
  ["_mycharacter", "/mycharacter"],
])