
export interface Notice {
  id: string;
  title: string;
  date: string;
  category: 'Circular' | 'Order' | 'Announcement';
  fileUrl?: string;
  isNew?: boolean;
}

export interface StaffMember {
  id: string;
  name: string;
  designation: string;
  qualification: string;
  image?: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  title: string;
  category: string;
}
