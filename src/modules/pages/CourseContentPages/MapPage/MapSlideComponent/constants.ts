import { Coordinates } from './types';

// 0-indexed
const oneAssignments: Coordinates[] = [
  {
    x: 11,
    y: 8,
  },
];

const twoAssignments: Coordinates[] = [
  {
    x: 8,
    y: 10,
  },
  {
    x: 15,
    y: 8,
  },
];

const threeAssignments: Coordinates[] = [
  {
    x: 6,
    y: 12,
  },
  {
    x: 11,
    y: 8,
  },
  {
    x: 17,
    y: 7,
  },
];

const fourAssignments: Coordinates[] = [
  {
    x: 7,
    y: 13,
  },
  {
    x: 10,
    y: 6,
  },
  {
    x: 12,
    y: 12,
  },
  {
    x: 17,
    y: 7,
  },
];

const fiveAssignments: Coordinates[] = [
  {
    x: 5,
    y: 8,
  },
  {
    x: 9,
    y: 7,
  },
  {
    x: 12,
    y: 11,
  },
  {
    x: 15,
    y: 7,
  },
  {
    x: 18,
    y: 12,
  },
];

const sixAssignments: Coordinates[] = [
  {
    x: 4,
    y: 6,
  },
  {
    x: 7,
    y: 13,
  },
  {
    x: 10,
    y: 6,
  },
  {
    x: 13,
    y: 14,
  },
  {
    x: 16,
    y: 5,
  },
  {
    x: 19,
    y: 13,
  },
];

const sevenAssignments: Coordinates[] = [
  {
    x: 3,
    y: 7,
  },
  {
    x: 6,
    y: 11,
  },
  {
    x: 9,
    y: 7,
  },
  {
    x: 12,
    y: 11,
  },
  {
    x: 15,
    y: 7,
  },
  {
    x: 18,
    y: 11,
  },
  {
    x: 21,
    y: 9,
  },
];

const eightAssignments: Coordinates[] = [
  {
    x: 3,
    y: 7,
  },
  {
    x: 6,
    y: 11,
  },
  {
    x: 9,
    y: 7,
  },
  {
    x: 12,
    y: 10,
  },
  {
    x: 14,
    y: 13,
  },
  {
    x: 15,
    y: 8,
  },
  {
    x: 18,
    y: 11,
  },
  {
    x: 21,
    y: 9,
  },
];

const nineAssignments: Coordinates[] = [
  {
    x: 4,
    y: 6,
  },
  {
    x: 6,
    y: 12,
  },
  {
    x: 8,
    y: 9,
  },
  {
    x: 10,
    y: 6,
  },
  {
    x: 12,
    y: 12,
  },
  {
    x: 15,
    y: 7,
  },
  {
    x: 17,
    y: 9,
  },
  {
    x: 19,
    y: 13,
  },
  {
    x: 21,
    y: 9,
  },
];

const tenAssignments: Coordinates[] = [
  {
    x: 4,
    y: 6,
  },
  {
    x: 6,
    y: 12,
  },
  {
    x: 8,
    y: 9,
  },
  {
    x: 10,
    y: 6,
  },
  {
    x: 12,
    y: 11,
  },
  {
    x: 14,
    y: 12,
  },
  {
    x: 15,
    y: 7,
  },
  {
    x: 17,
    y: 8,
  },
  {
    x: 19,
    y: 13,
  },
  {
    x: 22,
    y: 9,
  },
];

export const assignmentCoordinates: Map<number, Coordinates[]> = new Map([
  [1, oneAssignments],
  [2, twoAssignments],
  [3, threeAssignments],
  [4, fourAssignments],
  [5, fiveAssignments],
  [6, sixAssignments],
  [7, sevenAssignments],
  [8, eightAssignments],
  [9, nineAssignments],
  [10, tenAssignments],
]);
