import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const A_SidebarData = [
  {
    title: 'Home',
    path: '/admin/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  // {
  //   title: 'Approve',
  //   path: '/admin/reports',
  //   icon: <IoIcons.IoIosPaper />,
  //   cName: 'nav-text'
  // },
  {
    title: 'Tenant Request',
    path: '/admin/tenantrequest',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Worker Request',
    path: '/admin/workerrequest',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Tenant List',
    path: '/admin/approve',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },

  {
    title: 'Support',
    path: '/admin/support',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];

export const W_SidebarData = [
  {
    title: 'Home',
    path: '/worker/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  // {
  //   title: 'Approve',
  //   path: '/admin/reports',
  //   icon: <IoIcons.IoIosPaper />,
  //   cName: 'nav-text'
  // },
  {
    title: 'W Request',
    path: '/worker/tenantrequest',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Orders',
    path: '/worker/orders',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'W Approve',
    path: '/worker/approve',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },

  {
    title: 'Support',
    path: '/worker/support',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];
