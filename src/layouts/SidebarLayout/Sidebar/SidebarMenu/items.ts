import { ReactNode } from 'react';

export interface MenuItem {
  link?: string;
  icon?: ReactNode;
  badge?: string;
  items?: MenuItem[];
  name: string;
}

export interface MenuItems {
  items: MenuItem[];
  heading: string;
}

const menuItems: MenuItems[] = [
  {
    heading: '',
    items: [
      {
        name: 'Home',
        link: '/'
      }
    ]
  },
  {
    heading: '',
    items: [
      {
        name: 'Scrim',
        link: '/'
      }
    ]
  },
  {
    heading: '',
    items: [
      {
        name: 'RecruitmentTools',
        link: '/'
      }
    ]
  },
  {
    heading: '',
    items: [
      {
        name: 'My Teams',
        link: '/'
      }
    ]
  },
  {
    heading: '',
    items: [
      {
        name: 'Overwatch Data',
        link: '/'
      }
    ]
  },
  {
    heading: '',
    items: [
      {
        name: 'Events',
        link: '/'
      }
    ]
  },
  {
    heading: '',
    items: [
      {
        name: 'About',
        link: '/',
      }
    ]
  },
  {
    heading: '',
    items: [
      {
        name: 'Blog',
        link: '/',
      }
    ]
  },
  {
    heading: '',
    items: [
      {
        name: 'Contact Us',
        link: '/',
      }
    ]
  }
];

export default menuItems;
