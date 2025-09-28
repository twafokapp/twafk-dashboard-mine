// src/utils/sidebarConfig.ts

import {
  Archive,
  BarChart,
  Home,
  LogOut,
  Settings,
  ShoppingCart,
  Truck,
  UserCheck,
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
