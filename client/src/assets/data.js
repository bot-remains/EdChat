// data.js
export const colleges = {
  'Rajasthan Institute of Technology': {
    'Computer Science': {
      General: [80, 84, 89, 87],
      OBC: [68, 70, 74, 76],
      'SC/ST': [22, 21, 20, 19],
    },
    'Mechanical Engineering': {
      General: [77, 79, 81, 83],
      OBC: [74, 76, 78, 80],
      'SC/ST': [27, 25, 22, 20],
    },
    'Electrical Engineering': {
      General: [72, 74, 77, 79],
      OBC: [69, 71, 73, 75],
      'SC/ST': [26, 24, 22, 21],
    },
    'Civil Engineering': {
      General: [71, 73, 76, 78],
      OBC: [72, 74, 76, 78],
      'SC/ST': [28, 26, 24, 22],
    },
  },
  'Jaipur Engineering College': {
    'Computer Science': {
      General: [87, 85, 90, 88],
      OBC: [69, 71, 73, 77],
      'SC/ST': [26, 24, 22, 20],
    },
    'Mechanical Engineering': {
      General: [78, 80, 84, 82],
      OBC: [74, 76, 78, 81],
      'SC/ST': [30, 28, 25, 22],
    },
    'Electrical Engineering': {
      General: [68, 70, 72, 74],
      OBC: [71, 73, 75, 77],
      'SC/ST': [24, 22, 21, 19],
    },
    'Civil Engineering': {
      General: [72, 74, 76, 78],
      OBC: [73, 75, 77, 79],
      'SC/ST': [27, 25, 22, 21],
    },
  },
  'Bikaner Institute of Technology': {
    'Computer Science': {
      General: [92, 90, 94, 93],
      OBC: [76, 78, 80, 82],
      'SC/ST': [23, 22, 21, 19],
    },
    'Mechanical Engineering': {
      General: [83, 85, 88, 87],
      OBC: [77, 79, 81, 83],
      'SC/ST': [28, 26, 24, 22],
    },
    'Electrical Engineering': {
      General: [80, 82, 84, 85],
      OBC: [74, 76, 78, 80],
      'SC/ST': [25, 23, 21, 20],
    },
    'Civil Engineering': {
      General: [73, 75, 77, 79],
      OBC: [72, 74, 76, 78],
      'SC/ST': [30, 28, 26, 24],
    },
  },
  'Delhi Institute of Technology': {
    'Computer Science': {
      General: [85, 88, 91, 89],
      OBC: [70, 72, 75, 78],
      'SC/ST': [24, 22, 21, 20],
    },
    'Mechanical Engineering': {
      General: [80, 82, 85, 84],
      OBC: [75, 77, 80, 82],
      'SC/ST': [29, 27, 24, 22],
    },
    'Electrical Engineering': {
      General: [77, 79, 81, 80],
      OBC: [71, 73, 76, 78],
      'SC/ST': [26, 24, 22, 21],
    },
    'Civil Engineering': {
      General: [74, 76, 78, 77],
      OBC: [73, 75, 77, 79],
      'SC/ST': [28, 26, 25, 22],
    },
  },
  'Mumbai Institute of Engineering': {
    'Computer Science': {
      General: [90, 92, 93, 91],
      OBC: [77, 79, 81, 80],
      'SC/ST': [25, 23, 22, 21],
    },
    'Mechanical Engineering': {
      General: [84, 86, 88, 87],
      OBC: [72, 74, 76, 78],
      'SC/ST': [30, 28, 25, 23],
    },
    'Electrical Engineering': {
      General: [82, 84, 86, 85],
      OBC: [70, 72, 74, 76],
      'SC/ST': [27, 25, 22, 21],
    },
    'Civil Engineering': {
      General: [77, 79, 81, 80],
      OBC: [74, 76, 78, 80],
      'SC/ST': [28, 26, 24, 22],
    },
  },
};

export const branches = [
  'Computer Science',
  'Mechanical Engineering',
  'Electrical Engineering',
  'Civil Engineering',
];

export const categories = ['General', 'OBC', 'SC/ST'];

export const placements = {
  'Rajasthan Institute of Technology': [
    { branch: 'Computer Science', placementRate: 85 },
    { branch: 'Mechanical Engineering', placementRate: 70 },
    { branch: 'Electrical Engineering', placementRate: 65 },
    { branch: 'Civil Engineering', placementRate: 55 },
    { branch: 'Information Technology', placementRate: 80 },
  ],
  'Delhi Technological University': [
    { branch: 'Computer Science', placementRate: 95 },
    { branch: 'Mechanical Engineering', placementRate: 75 },
    { branch: 'Electrical Engineering', placementRate: 78 },
    { branch: 'Civil Engineering', placementRate: 60 },
    { branch: 'Information Technology', placementRate: 88 },
  ],
  'Indian Institute of Technology Bombay': [
    { branch: 'Computer Science', placementRate: 98 },
    { branch: 'Mechanical Engineering', placementRate: 85 },
    { branch: 'Electrical Engineering', placementRate: 90 },
    { branch: 'Civil Engineering', placementRate: 70 },
    { branch: 'Information Technology', placementRate: 96 },
  ],
  'Birla Institute of Technology and Science': [
    { branch: 'Computer Science', placementRate: 92 },
    { branch: 'Mechanical Engineering', placementRate: 80 },
    { branch: 'Electrical Engineering', placementRate: 85 },
    { branch: 'Civil Engineering', placementRate: 65 },
    { branch: 'Information Technology', placementRate: 90 },
  ],
  'National Institute of Technology Karnataka': [
    { branch: 'Computer Science', placementRate: 90 },
    { branch: 'Mechanical Engineering', placementRate: 78 },
    { branch: 'Electrical Engineering', placementRate: 82 },
    { branch: 'Civil Engineering', placementRate: 60 },
    { branch: 'Information Technology', placementRate: 88 },
  ],
};
