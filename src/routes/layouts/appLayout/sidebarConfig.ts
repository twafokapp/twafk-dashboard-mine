// src/utils/sidebarConfig.ts

import {
  Archive,
  BarChart,
  ClipboardList,
  DoorOpen,
  FileText,
  Fingerprint,
  GraduationCap,
  Home,
  LogOut,
  Mail,
  NotebookPen,
  Pencil,
  Plane,
  Settings,
  Share2,
  ShieldUser,
  ShieldX,
  ShoppingCart,
  Truck,
  UserCheck,
  UserRoundCog,
  UserRoundPlus,
  Users,
} from 'lucide-react';

export const items = [
  // Define sidebar items with id, title, url, and icon
  { id: 'main', title: 'sidebar.main', url: '/', icon: Home },
  { id: 'clients', title: 'sidebar.clients', url: '/clients', icon: Users },
  {
    id: 'products-orders',
    title: 'sidebar.products_orders',
    url: '/products-orders',
    icon: ShoppingCart,
  },
  { id: 'shipping', title: 'sidebar.ships_management', url: '/shipment-management', icon: Truck },
  {
    id: 'deliverymen',
    title: 'sidebar.deliverymen_management',
    url: '/deliverymen',
    icon: UserCheck,
  },
  {
    id: 'products',
    title: 'sidebar.products_management',
    url: '/products',
    icon: Archive,
  },
  { id: 'reports', title: 'sidebar.reports', url: '/reports', icon: BarChart },
  { id: 'settings', title: 'sidebar.settings', url: '/settings', icon: Settings },
  { id: 'logout', title: 'sidebar.logout', url: '/logout', icon: LogOut },
];

export const adminSettings = [
  { id: 'dashboard', title: 'mainSidebar.dashboard', url: '/', icon: ShieldUser,count: 0 },
  { id: 'tasks', title: 'mainSidebar.tasks', url: '/tasks', icon: ClipboardList,count: 5 },
  { id: 'pormotion_requests', title: 'mainSidebar.pormotion_requests', url: '/promotion-requests', icon: UserRoundCog, count: 2 },
  { id: 'connection_messages', title: 'mainSidebar.connection_messages', url: '/Connection-messages', icon: Mail, count: 8 },
  { id: 'organiztional_structure', title: 'mainSidebar.organiztional_structure', url: '/organizational-structure', icon: Mail, count: 3 },
]


export const humanResources = [
  { id: 'add_emplyee', title: 'mainSidebar.add_emplyee', url: '/add-employee', icon: UserRoundPlus, count: 12 },
  { id: 'all_employees', title: 'mainSidebar.all_employees', url: '/all-employees', icon: Users, count: 0 },
  { id: 'reports', title: 'mainSidebar.reports', url: '/reports', icon: FileText, count: 0 },
  { id: 'finger_print', title: 'mainSidebar.finger_print', url: '/finger-print', icon: Fingerprint, count: 3 },
  { id: 'manual_attendance', title: 'mainSidebar.manual_attendance', url: '/manual-attendance', icon: Pencil, count: 8 },
  { id: 'settlement_requests', title: 'mainSidebar.settlement_requests', url: '/settlement-requests', icon: NotebookPen, count: 1 },
]


export const PermitsAndAuthorizations = [
  { id: 'data', title: 'mainSidebar.missions', url: '/missions', icon: Share2, count: 0 },
  { id: 'tasks', title: 'mainSidebar.exceptions_requests', url: '/exceptions-requests', icon: ShieldX, count: 10 },
  { id: 'promotion', title: 'mainSidebar.exit_permit_requests', url: '/exit-permit-requests', icon: DoorOpen, count: 2 },
  { id: 'social', title: 'mainSidebar.leave_requests', url: '/leave-requests', icon: Plane, count: 1 },
  { id: 'Org', title: 'mainSidebar.courses_requests', url: '/courses-requests', icon: GraduationCap, count: 0 },
]

export const fincinalMangement = [
  { id: 'data', title: 'mainSidebar.financial_reports', url: '/financial-reports', icon: Share2, count: 3 },
  { id: 'tasks', title: 'mainSidebar.salaries', url: '/salaries', icon: ShieldX, count: 16 },
  { id: 'promotion', title: 'mainSidebar.advance_requests', url: '/advance-requests', icon: DoorOpen, count: 4 },
]

export const buffetAndServices = [
  { id: 'data', title: 'mainSidebar.drinks', url: '/drinks', icon: Share2, count: 6 },
]

export const generalSettings = [
  { id: 'data', title: 'mainSidebar.branches', url: '/branches', icon: Share2, count: 0 },
  { id: 'data', title: 'mainSidebar.companies', url: '/companies', icon: Share2, count: 2 },
  { id: 'data', title: 'mainSidebar.departments', url: '/departments', icon: Share2,  count: 3 },
  { id: 'data', title: 'mainSidebar.vacations', url: '/vacations', icon: Share2, count: 5 },
  { id: 'data', title: 'mainSidebar.notifications', url: '/notifications', icon: Share2, count: 7 },
  { id: 'data', title: 'mainSidebar.job_titles', url: '/job-titles', icon: Share2, count: 0 },
]
