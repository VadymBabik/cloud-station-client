export const user = {
  name: 'Vadym',
  email: 'tom@example.com',
  // imageUrl: null
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
};
export const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
  { name: 'Reports', href: '#', current: false }
];
export const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' }
];

export const tableHeader = [
  { id: 1, name: 'Type' },
  { id: 2, name: 'Name' },
  { id: 3, name: 'Status' },
  { id: 3, name: 'Date' },
  { id: 4, name: 'Action' }
  // { id: 5, name: '' }
];

export const enum tableItemType {
  FILE = 'file',
  FOLDER = 'folder'
}

export interface tableBodyProps {
  id: number;
  type: 'file' | 'folder';
  name: string;
  date: string;
  status: boolean;
}
const dd = new Date().toLocaleString();
export const tableBody: tableBodyProps[] = [
  {
    id: 1,
    type: 'folder',
    name: 'Folder name',
    date: dd,
    status: true
  },
  {
    id: 2,
    type: 'folder',
    name: 'Folder name',
    date: dd,
    status: true
  },
  {
    id: 3,
    type: 'folder',
    name: 'Folder name',
    date: dd,
    status: false
  },
  {
    id: 4,
    type: 'folder',
    name: 'Folder name',
    date: dd,
    status: false
  },
  { id: 5, type: 'file', name: 'File name', date: dd, status: true },
  { id: 6, type: 'file', name: 'File name', date: dd, status: true },
  { id: 7, type: 'file', name: 'File name', date: dd, status: true },
  { id: 8, type: 'file', name: 'File name', date: dd, status: true },
  { id: 9, type: 'file', name: 'File name', date: dd, status: true },
  { id: 10, type: 'file', name: 'File name', date: dd, status: false },
  { id: 11, type: 'file', name: 'File name', date: dd, status: true },
  { id: 12, type: 'file', name: 'File name', date: dd, status: true },
  { id: 13, type: 'file', name: 'File name', date: dd, status: true },
  { id: 14, type: 'file', name: 'File name', date: dd, status: true }
];
