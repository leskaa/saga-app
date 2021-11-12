// DUMMY DATA FOR TESTING
import {
  Student,
  Teacher,
  Course,
  Map,
  Assignment,
  Unit,
  Submission,
  Message,
} from './types';

function randomDate(start: Date, end: Date) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

export const dummyMap: Map = {
  id: 1,
  name: 'Bee Map',
  url: 'https://drive.google.com/uc?export=view&id=1Ly46o2fj5OQxf8-BtqPzDwSTyFUKJ-RD',
  createdAt: new Date('11-05-2021'),
  updatedAt: new Date('11-06-2021'),
};

export const dummyCourse: Course = {
  id: 2,
  name: 'Liquid Hacks 2.0: Learn to Hack',
  description:
    'Learn to hack with coders during the Liquid Hacks 2.0 challenge',
  totalStars: 20,
  starGoal: 900,
  prize: 'Tacos',
  createdAt: new Date('11-05-2021'),
  updatedAt: new Date('11-06-2021'),
};

export const dummyUnit: Unit = {
  id: 3,
  name: 'Hacking 101',
  description: 'Lorem Ipsum Liquid Liquid Liquid Hacks Lorem Ipsum Liquid',
  unitNumber: 1,
  map: 1,
  createdAt: new Date('11-05-2021'),
  updatedAt: new Date('11-06-2021'),
};

export const dummyStudent: Student = {
  id: 4,
  name: 'Frodo Baggins',
  email: 'frodo.baggins@fellowship.edu',
  pronouns: 'He/Him',
  isTeacher: false,
  stars: 10,
  selectedAvatar: 'Blue',
  createdAt: new Date('11-05-2021'),
  updatedAt: new Date('11-06-2021'),
  attendingCourses: [dummyCourse],
};

export const dummyTeacher: Teacher = {
  id: 5,
  name: 'Gandalf Grey',
  email: 'gandalf.grey@fellowship.edu',
  pronouns: 'They/Them',
  isTeacher: true,
  stars: 10,
  selectedAvatar: 'Giraffe',
  createdAt: new Date('11-05-2021'),
  updatedAt: new Date('11-06-2021'),
  teachingCourses: [dummyCourse],
};

export const dummyAssignment: Assignment = {
  id: 6,
  name: 'Assignment',
  content: 'Ooga booga yay!11',
  dueDate: new Date('12-31-2021'),
  unitId: 1,
  createdAt: new Date('11-05-2021'),
  updatedAt: new Date('11-06-2021'),
};

export const dummySubmission: Submission = {
  id: 7,
  grade: 4,
  content: "I don't like your cake",
  studentId: 1,
  assignmentId: 6,
  createdAt: new Date('11-05-2021'),
  updatedAt: new Date('11-06-2021'),
};

export const dummyMessages: Message[] = [
  {
    id: 0,
    subject:
      'Bakes. Making a really long message in order to tesst over floooooooooooow',
    content: "I don't like your cake",
    sender: 'Paul Hollywood',
    read: false,
    createdAt: new Date('11-05-2021'),
  },
  {
    id: 1,
    subject: 'Bakes 1',
    content: "I don't like your cake",
    sender: 'Paul Hollywood',
    read: false,
    createdAt: new Date('11-03-2021'),
  },
  {
    id: 2,
    subject: 'Bakes 2',
    content: "I don't like your cake",
    sender: 'Paul Hollywood',
    read: false,
    createdAt: new Date('11-02-2021'),
  },
  {
    id: 3,
    subject: 'Bakes 3',
    content: "I don't like your cake",
    sender: 'Mary Cherry',
    read: false,
    createdAt: new Date('11-01-2021'),
  },
  {
    id: 4,
    subject: 'Bakes 4',
    content: 'I like your cake',
    sender: 'Mary Cherry',
    read: true,
    createdAt: new Date('08-10-2011'),
  },
];

export const dummyAssignments: Assignment[] = [...Array(10)].map(
  (value, index) => {
    return {
      ...dummyAssignment,
      id: index,
      name: `Assignment ${index + 1}`,
      content: `Content fsdfsf ${index} Content fsdfsf Content fsdfsf Content fsdfsf Content fsdfsf Content fsdfsf Content fsdfsf Content fsdfsf Content fsdfsf Content fsdfsf Content fsdfsf Content fsdfsf Content fsdfsf Content fsdfsf Content fsdfsf Content fsdfsf Content fsdfsf `,
      createdAt: new Date('11-05-2021'),
      dueDate: randomDate(new Date('01-01-2016'), new Date('06-25-2025')),
    };
  }
);

export const dummyUnits: Unit[] = [...Array(10)].map((value, index) => {
  return {
    ...dummyUnit,
  };
});

export const dummySubmissions: Submission[] = [...Array(4)].map(
  (value, index) => {
    return {
      ...dummySubmission,
      id: index + 30,
      assignmentId: index,
      grade: Math.floor(Math.random() * 6),
    };
  }
);

export const getdummyAssignments = () => dummyAssignments;
