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
  { id: 'data', title: 'mainSidebar.dashboard', url: '/', icon: ShieldUser },
  { id: 'tasks', title: 'mainSidebar.tasks', url: '/tasks', icon: ClipboardList },
  { id: 'promotion', title: 'mainSidebar.pormotion_requests', url: '/promotion', icon: UserRoundCog },
  { id: 'social', title: 'mainSidebar.connection_messages', url: '/social-mails', icon: Mail },
  { id: 'Org', title: 'mainSidebar.organiztional_structure', url: '/organizational-structure', icon: Mail },
]


export const humanResources = [
  { id: 'data', title: 'mainSidebar.add_emplyee', url: '/', icon: UserRoundPlus },
  { id: 'tasks', title: 'mainSidebar.all_employees', url: '/tasks', icon: Users },
  { id: 'promotion', title: 'mainSidebar.reports', url: '/promotion', icon: FileText },
  { id: 'social', title: 'mainSidebar.finger_print', url: '/social-mails', icon: Fingerprint },
  { id: 'Org', title: 'mainSidebar.manual_attendance', url: '/organizational-structure', icon: Pencil },
  { id: 'Org', title: 'mainSidebar.settlement_requests', url: '/organizational-structure', icon: NotebookPen },
]


export const PermitsAndAuthorizations = [
  { id: 'data', title: 'mainSidebar.add_emplyee', url: '/', icon: Share2 },
  { id: 'tasks', title: 'mainSidebar.all_employees', url: '/tasks', icon: ShieldX },
  { id: 'promotion', title: 'mainSidebar.reports', url: '/promotion', icon: DoorOpen },
  { id: 'social', title: 'mainSidebar.finger_print', url: '/social-mails', icon: Plane },
  { id: 'Org', title: 'mainSidebar.manual_attendance', url: '/organizational-structure', icon: GraduationCap },
]

export const fincinalMangement = [
  { id: 'data', title: 'mainSidebar.financial_reports', url: '/', icon: Share2 },
  { id: 'tasks', title: 'mainSidebar.salaries', url: '/tasks', icon: ShieldX },
  { id: 'promotion', title: 'mainSidebar.advance_requests', url: '/promotion', icon: DoorOpen },
]

export const buffetAndServices = [
  { id: 'data', title: 'mainSidebar.drinks', url: '/', icon: Share2 },
]

export const generalSettings = [
  { id: 'data', title: 'mainSidebar.branches', url: '/', icon: Share2 },
  { id: 'data', title: 'mainSidebar.companies', url: '/', icon: Share2 },
  { id: 'data', title: 'mainSidebar.sections', url: '/', icon: Share2 },
  { id: 'data', title: 'mainSidebar.vacations', url: '/', icon: Share2 },
  { id: 'data', title: 'mainSidebar.notifications', url: '/', icon: Share2 },
  { id: 'data', title: 'mainSidebar.job_titles', url: '/', icon: Share2 },
]
