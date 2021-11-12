import {
  User,
  Student,
  Teacher,
  Course,
  Avatar,
  Map,
  Assignment,
  Unit,
  Submission,
  AssignmentSubmissionPair,
} from './types';

export function convertResponseDataToUser(data: any): User {
  const user: User = {
    id: data?.id,
    name: data?.name,
    pronouns: data?.pronouns,
    email: data?.email,
    isTeacher: data?.is_teacher,
    stars: data?.stars,
    selectedAvatar: data?.selected_avatar_url,
    createdAt: new Date(data?.created_at),
    updatedAt: new Date(data?.updated_at),
  };

  if (user.isTeacher) {
    const teacher: Teacher = {
      ...user,
      teachingCourses: [],
    };
    return teacher;
  }

  const student: Student = {
    ...user,
    attendingCourses: [],
  };
  return student;
}

export function convertResponseDataToUserArray(data: any): User[] {
  const users: User[] = data.map((user: any) =>
    convertResponseDataToUser(user)
  );

  return users;
}

export function convertResponseDataToUnit(data: any): Unit {
  return {
    id: data?.id,
    name: data?.name,
    description: data?.description,
    unitNumber: data?.unit_number,
    map: data?.map_id,
    createdAt: new Date(data?.created_at),
    updatedAt: new Date(data?.updated_at),
  };
}

export function convertResponseDataToUnitArray(data: any): Unit[] {
  const units: Unit[] = data.map((unit: any) =>
    convertResponseDataToUnit(unit)
  );

  return units;
}

export function convertResponseDataToCourse(data: any): Course {
  const course: Course = {
    id: data?.id,
    name: data?.name,
    description: data?.description,
    totalStars: data?.total_stars,
    starGoal: data?.star_goal,
    prize: data?.prize,
    createdAt: new Date(data?.created_at),
    updatedAt: new Date(data?.updated_at),
  };

  return course;
}

export function convertResponseDataToCourseArray(data: any): Course[] {
  const courses: Course[] = data.map((course: any) =>
    convertResponseDataToUnit(course)
  );

  return courses;
}

export function convertResponseDataToAvatar(data: any): Avatar {
  const avatar: Avatar = {
    id: data?.id,
    name: data?.name,
    url: data?.url,
    cost: data?.cost,
    createdAt: new Date(data?.created_at),
    updatedAt: new Date(data?.updated_at),
  };
  return avatar;
}

export function convertResponseDataToAvatarArray(data: any): Avatar[] {
  const avatars: Avatar[] = data.map((avatar: any) =>
    convertResponseDataToAvatar(avatar)
  );

  return avatars;
}

export function convertResponseDataToAssignment(data: any): Assignment {
  const assignment: Assignment = {
    id: data?.id,
    name: data?.name,
    content: data?.content,
    dueDate: new Date(data?.due_date),
    unitId: data?.unit_id,
    createdAt: new Date(data?.created_at),
    updatedAt: new Date(data?.updated_at),
  };

  return assignment;
}

export function convertResponseDataToAssignmentArray(data: any): Assignment[] {
  const assignments: Assignment[] = data.map((assignment: any) =>
    convertResponseDataToAssignment(assignment)
  );

  return assignments;
}

export function convertResponseDataToMap(data: any): Map {
  const map: Map = {
    id: data?.id,
    name: data?.name,
    url: data?.url,
    createdAt: new Date(data?.created_at),
    updatedAt: new Date(data?.updated_at),
  };
  return map;
}

export function convertResponseDataToMapArray(data: any): Map[] {
  const maps: Map[] = data.map((map: any) => convertResponseDataToAvatar(map));

  return maps;
}

export function convertResponseDataToSubmission(data: any): Submission {
  const submission: Submission = {
    id: data?.id,
    content: data?.content,
    grade: data?.grade,
    studentId: data?.student_id,
    assignmentId: data?.assignment_id,
    createdAt: new Date(data?.created_at),
    updatedAt: new Date(data?.updated_at),
  };
  return submission;
}

export function convertResponseDataToSubmissionArray(data: any): Submission[] {
  const submissions: Submission[] = data.map((submission: any) =>
    convertResponseDataToSubmission(submission)
  );

  return submissions;
}

export function convertResponseDataToAssignmentSubmissionPairArray(
  data: any
): AssignmentSubmissionPair[] {
  const assignmentAndSubmissions: AssignmentSubmissionPair[] = data.map(
    (datapair: any) => {
      const pair: AssignmentSubmissionPair = {
        assignment: convertResponseDataToAssignment(datapair?.assignment),
        submission: convertResponseDataToSubmissionArray(datapair?.submission),
      };
      return pair;
    }
  );
  return assignmentAndSubmissions;
}
