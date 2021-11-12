import { Unit, Assignment, Submission } from '../../../../general/types';

export interface MapSlideComponentProps {
  unit: Unit;
  assignments: Assignment[];
  submissions: Submission[];
  onNextSlide?: () => void;
  onPreviousSlide?: () => void;
  getHasSubmission: (id: number) => Submission | undefined;
  closestToDoAssignment?: Assignment;
  mapUrl: string | undefined;
}

export interface Coordinates {
  x: number;
  y: number;
}
