import {
  User,
  Student,
  Teacher,
  Course,
  Map,
  Assignment,
  Unit,
  Submission,
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

  // MAKE QUERY FOR COURSES

  const courses = [];

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

// We Get User from Login

// Query for list of all avatars in the beginning

//
