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
  createdAt: Date;
  updatedAt: Date;
}

export interface Course {
  id: number;
  name: string;
  description: string;
  maps: Map[];
  teachers: Teacher[];
  students: Student[];
  assignments: Assignment[];
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
  maxScore: number;
  dueDate: Date;
  unit: Unit;
  course: Course;
  createdAt: Date;
  updatedAt: Date;
}

export interface Unit {
  id: number;
  name: string;
  description: string;
  map: Map;
  course: Course;
  assignments: Assignment[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Submission {
  id: number;
  grade: number;
  student: Student;
  assignment: Assignment;
  createdAt: Date;
  updatedAt: Date;
}
