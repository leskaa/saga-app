// DUMMY DATA FOR TESTING
import { Student, Teacher, Course, Map, Assignment, Unit, Submission } from "./types";

export const dummyMap: Map = { 
  id: 1,
  name: "Bee Map",
  url: "https://drive.google.com/uc?export=view&id=1Ly46o2fj5OQxf8-BtqPzDwSTyFUKJ-RD",
  createdAt: new Date("11-05-2021"),
  updatedAt: new Date("11-06-2021")
}

export const dummyCourse: Course = {
  id: 2,
  name: "Liquid Hacks 2.0: Learn to Hack",
  description: "Learn to hack with coders during the Liquid Hacks 2.0 challenge",
  maps: [dummyMap],
  teachers: [],
  students: [],
  assignments: [],
  createdAt: new Date("11-05-2021"),
  updatedAt: new Date("11-06-2021")
}

export const dummyUnit: Unit = {
  id: 3,
  name: "Hacking 101",
  description: "Lorem Ipsum Liquid Liquid Liquid Hacks Lorem Ipsum Liquid",
  map: dummyMap,
  course: dummyCourse,
  assignments: [],
  createdAt: new Date("11-05-2021"),
  updatedAt: new Date("11-06-2021")
}

export const dummyStudent: Student = {
  id: 4,
  name: "Frodo Baggins",
  email: "frodo.baggins@fellowship.edu",
  isTeacher: false,
  stars: 10,
  selectedAvatar: "Blue",
  createdAt: new Date("11-05-2021"),
  updatedAt: new Date("11-06-2021"),
  attendingCourses: [dummyCourse],
}


export const dummyTeacher: Teacher = {
  id: 5,
  name: "Gandalf Grey",
  email: "gandalf.grey@fellowship.edu",
  isTeacher: true,
  stars: 10,
  selectedAvatar: "Giraffe",
  createdAt: new Date("11-05-2021"),
  updatedAt: new Date("11-06-2021"),
  teachingCourses: [dummyCourse],
}

export const dummyAssignment: Assignment= {
  id: 6,
  name: "Project 1",
  maxScore: 5,
  dueDate: new Date("12-31-2021"),
  unit: dummyUnit,
  course: dummyCourse,
  createdAt: new Date("11-05-2021"),
  updatedAt: new Date("11-06-2021"),
}
export const dummySubmission: Submission = {
  id: 7,
  grade: 4,
  student: dummyStudent,
  assignment: dummyAssignment,
  createdAt: new Date("11-05-2021"),
  updatedAt: new Date("11-06-2021"),
}

dummyCourse.students.push(dummyStudent);
dummyCourse.teachers.push(dummyTeacher);
dummyUnit.assignments.push(dummyAssignment);
dummyCourse.assignments.push(dummyAssignment);