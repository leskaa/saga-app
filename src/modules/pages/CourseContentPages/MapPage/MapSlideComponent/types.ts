export interface MapSlideComponentProps {
  unit: Unit;
  onNextSlide?: () => void;
  onPreviousSlide?: () => void;
}

export interface Unit {
  id: string;
  name: string;
  description: string;
  courseId: number;
  mapId: number;
}

export interface Coordinates {
  x: number;
  y: number;
}
