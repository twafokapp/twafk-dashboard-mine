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

import {PATHS} from "@/constants/paths"


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
  { id: 'dashboard', title: 'mainSidebar.dashboard', url: `${PATHS.dashboard}`, icon: ShieldUser,count: 0 },
  { id: 'tasks', title: 'mainSidebar.tasks', url: `${PATHS.tasks}`, icon: ClipboardList,count: 5 },
  { id: 'pormotion_requests', title: 'mainSidebar.pormotion_requests', url: `${PATHS.promotionRequests}`, icon: UserRoundCog, count: 2 },
  { id: 'connection_messages', title: 'mainSidebar.connection_messages', url: `${PATHS.connectionMessages}`, icon: Mail, count: 8 },
  { id: 'organiztional_structure', title: 'mainSidebar.organiztional_structure', url: `${PATHS.organizationalStructure}`, icon: Mail, count: 3 },
]


export const humanResources = [
  { id: 'add_emplyee', title: 'mainSidebar.add_emplyee', url: `${PATHS.addEmployee}`, icon: UserRoundPlus, count: 12 },
  { id: 'all_employees', title: 'mainSidebar.all_employees', url: `${PATHS.allEmployees}`, icon: Users, count: 0 },
  { id: 'reports', title: 'mainSidebar.reports', url: `${PATHS.reports}`, icon: FileText, count: 0 },
  { id: 'finger_print', title: 'mainSidebar.finger_print', url: `${PATHS.fingerPrint}`, icon: Fingerprint, count: 3 },
  { id: 'manual_attendance', title: 'mainSidebar.manual_attendance', url: `${PATHS.manualAttendance}`, icon: Pencil, count: 8 },
  { id: 'settlement_requests', title: 'mainSidebar.settlement_requests', url: `${PATHS.settlementRequests}`, icon: NotebookPen, count: 1 },
]


export const PermitsAndAuthorizations = [
  { id: 'missions', title: 'mainSidebar.missions', url: `${PATHS.missions}`, icon: Share2, count: 0 },
  { id: 'exceptions_requests', title: 'mainSidebar.exceptions_requests', url: `${PATHS.exceptionsRequests}`, icon: ShieldX, count: 10 },
  { id: 'exit_permit_requests', title: 'mainSidebar.exit_permit_requests', url: `${PATHS.exitPermitRequests}`, icon: DoorOpen, count: 2 },
  { id: 'leave_requests', title: 'mainSidebar.leave_requests', url: `${PATHS.leaveRequests}`, icon: Plane, count: 1 },
  { id: 'courses_requests', title: 'mainSidebar.courses_requests', url: `${PATHS.coursesRequests}`, icon: GraduationCap, count: 0 },
]

export const fincinalMangement = [
  { id: 'financial_reports', title: 'mainSidebar.financial_reports', url: `${PATHS.financialReports}`, icon: Share2, count: 3 },
  { id: 'salaries', title: 'mainSidebar.salaries', url: `${PATHS.salaries}`, icon: ShieldX, count: 16 },
  { id: 'advance_requests', title: 'mainSidebar.advance_requests', url: `${PATHS.advanceRequests}`, icon: DoorOpen, count: 4 },
]

export const buffetAndServices = [
  { id: 'drinks', title: 'mainSidebar.drinks', url: `${PATHS.drinks}`, icon: Share2, count: 6 },
]

export const generalSettings = [
  { id: 'branches', title: 'mainSidebar.branches', url: `${PATHS.branches}`, icon: Share2, count: 0 },
  { id: 'companies', title: 'mainSidebar.companies', url: `${PATHS.companies}`, icon: Share2, count: 2 },
  { id: 'departments', title: 'mainSidebar.departments', url: `${PATHS.departments}`, icon: Share2,  count: 3 },
  { id: 'departments', title: 'mainSidebar.vacations', url: `${PATHS.vacations}`, icon: Share2, count: 5 },
  { id: 'notifications', title: 'mainSidebar.notifications', url: `${PATHS.notifications}`, icon: Share2, count: 7 },
  { id: 'job_titles', title: 'mainSidebar.job_titles', url: `${PATHS.jobTitles}`, icon: Share2, count: 0 },
]
