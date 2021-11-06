interface TableData {
  key: string;
}

interface TableColumn {
  title: string;
  dataIndex: string;
  key: string;
}

export interface AssignmentInfoTableData extends TableData {
  name: string;
  maxScore: number;
  dueDate: string | Date;
}

export interface StudentInfoTableData extends TableData {
  name: string;
  pronouns: string | null;
  email: string;
  starsEarned: number;
}

export interface StudentAssignmentInfoTableData extends TableData {
  studentName: string;
  assignmentName: string;
  studentScore: number;
  submissionDate: string | Date;
}

export const AssignmentInfoTableColumns: TableColumn[] = [
  {
    title: "Assignment Name",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "Max Possible Score",
    dataIndex: "maxScore",
    key: "maxScore"
  },
  {
    title: "Due Date",
    dataIndex: "dueDate",
    key: "dueDate"
  }
];

export const StudentInfoTableColumns: TableColumn[] = [
  {
    title: "Student Name",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "Pronouns",
    dataIndex: "pronouns",
    key: "pronouns"
  },
  {
    title: "Max Possible Score",
    dataIndex: "maxScore",
    key: "maxScore"
  },
  {
    title: "Due Date",
    dataIndex: "dueDate",
    key: "dueDate"
  }
];
