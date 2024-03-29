export interface User {
  id: number;
  name: string;
  email: string;
  pronouns: string | null;
  isTeacher: boolean;
  stars: number;
  selectedAvatar: string;
  createdAt: Date | null;
  updatedAt: Date | null;
}

export interface Student extends User {
  attendingCourses: Course[];
}

export interface Teacher extends User {
  teachingCourses: Course[];
}

export interface Avatar {
  id: number;
  name: string;
  url: string;
  cost: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Course {
  id: number;
  name: string;
  description: string;
  totalStars: number;
  starGoal: number;
  prize: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Map {
  id: number;
  name: string;
  url: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Assignment {
  id: number;
  name: string;
  content: string;
  dueDate: Date;
  unitId: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Unit {
  id: number;
  name: string;
  description: string;
  unitNumber: number;
  map: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Submission {
  id: number;
  content: string;
  grade: number;
  studentId: number;
  assignmentId: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Message {
  id: number;
  subject: string;
  content: string;
  sender: string;
  read: boolean;
  createdAt: Date;
}

export interface AssignmentSubmissionPair {
  assignment: Assignment;
  submission: Submission[];
}
