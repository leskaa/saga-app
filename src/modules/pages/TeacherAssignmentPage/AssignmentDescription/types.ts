import { Assignment, Course, User } from '../../../general/types';

export interface AssignmentProps {
  user: User;
  course: Course;
  assignment: Assignment;
}
