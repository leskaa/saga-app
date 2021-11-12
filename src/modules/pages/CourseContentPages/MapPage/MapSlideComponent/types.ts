import { Unit, Assignment, Submission } from '../../../../general/types';

export interface MapSlideComponentProps {
  unit: Unit;
  assignments: Assignment[];
  submissions: Submission[];
  onNextSlide?: () => void;
  onPreviousSlide?: () => void;
}

export interface Coordinates {
  x: number;
  y: number;
}
