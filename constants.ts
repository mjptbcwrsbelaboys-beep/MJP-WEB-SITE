
import { Notice, StaffMember, GalleryImage } from './types';

export const SCHOOL_NAME = "MJPTBCWR School (Boys), Bela";
export const FULL_SCHOOL_NAME = "Mahatma Jyotiba Phule Telangana Backward Classes Welfare Residential School (Boys), Bela";
export const DISTRICT = "Adilabad District";
export const STATE = "Telangana";

export const NOTICES: Notice[] = [
  { id: '1', title: 'Annual Examination Schedule 2024-25', date: '2024-05-15', category: 'Announcement', isNew: true },
  { id: '2', title: 'Admissions for Class V Open', date: '2024-05-10', category: 'Circular', isNew: true },
  { id: '3', title: 'Summer Vacation Official Order', date: '2024-04-30', category: 'Order' },
  { id: '4', title: 'Participation in State Level Sports Meet', date: '2024-04-20', category: 'Circular' },
];

export const TEACHING_STAFF: StaffMember[] = [
  { id: 's1', name: 'Sri. K. Ramesh', designation: 'Principal', qualification: 'M.Sc, M.Ed' },
  { id: 's2', name: 'Sri. B. Venkatesh', designation: 'PGT Mathematics', qualification: 'M.Sc, B.Ed' },
  { id: 's3', name: 'Sri. M. Srinivas', designation: 'PGT Physical Science', qualification: 'M.Sc, B.Ed' },
  { id: 's4', name: 'Sri. P. Ravi', designation: 'PGT Social Studies', qualification: 'M.A, B.Ed' },
  { id: 's5', name: 'Sri. D. Mahesh', designation: 'TGT Telugu', qualification: 'M.A, T.P.T' },
  { id: 's6', name: 'Sri. G. Raju', designation: 'TGT English', qualification: 'M.A, B.Ed' },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: 'g1', url: 'https://picsum.photos/seed/school1/800/600', title: 'Republic Day Celebrations', category: 'Events' },
  { id: 'g2', url: 'https://picsum.photos/seed/school2/800/600', title: 'Science Fair 2024', category: 'Activities' },
  { id: 'g3', url: 'https://picsum.photos/seed/school3/800/600', title: 'Sports Day Final Match', category: 'Sports' },
  { id: 'g4', url: 'https://picsum.photos/seed/school4/800/600', title: 'School Building Front View', category: 'Campus' },
  { id: 'g5', url: 'https://picsum.photos/seed/school5/800/600', title: 'Yoga Session', category: 'Activities' },
  { id: 'g6', url: 'https://picsum.photos/seed/school6/800/600', title: 'Classroom Interaction', category: 'Academics' },
];
