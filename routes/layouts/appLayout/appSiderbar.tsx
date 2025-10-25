// // src/routes/layouts/appLayout/AppSidebar.tsx

// // 1. Import useState, your new hook, and the dialog component
// import { useState } from 'react';
// import { useLogoutHandler } from '@/hooks/useLogoutHandler';

// import {
//   Sidebar,
//   SidebarGroupContent,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
// } from '@/components/ui/sidebar';
// import { useTranslation } from 'react-i18next';
// import { items } from '@/routes/layouts/appLayout/sidebarConfig';
// import { NavLink, useLocation, useSearchParams } from 'react-router-dom';
// import { LogoutConfirmationDialog } from '@/common/logout/LogoutConfirmationDialog';

// type ValidSideBarItem =
//   | 'clients'
//   | 'products-orders'
//   | 'shipping'
//   | 'deliverymen'
//   | 'financial-transactions'
//   | 'products-management'
//   | 'reports'
//   | 'settings';

// const VALID_SIDEBAR_ITEMS: ValidSideBarItem[] = [
//   'clients',
//   'products-orders',
//   'shipping',
//   'deliverymen',
//   'financial-transactions',
//   'products-management',
//   'reports',
//   'settings',
// ];

// export function AppSidebar() {
//   const { i18n, t } = useTranslation();
//   const [, setSearchParams] = useSearchParams();
//   const location = useLocation();

//   // 2. Add state for the dialog and instantiate the logout handler hook
//   const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false);
//   const { handleLogout } = useLogoutHandler();

//   const handleSidebarChange = (newSideBar: ValidSideBarItem) => {
//     setSearchParams({ sideBar: newSideBar });
//   };

//   const isItemActive = (id?: string) => {
//     if (!id || id === 'logout') return false;
//     if (id === 'main') return location.pathname === '/';
//     // A more robust check for other items
//     return location.pathname === `/${id}` || location.pathname.startsWith(`/${id}/`);
//   };

//   return (
//     // 3. Wrap the return in a fragment <> to include the dialog
//     <div className='absolute z-5 '>
//       <Sidebar side={i18n.language === 'ar' ? 'right' : 'left'} className='right-28 top-16'>
//         <SidebarGroupContent>
//           <SidebarMenu className='gap-3'>
//             {items.map(({ id, icon: Icon, title, url }) => {
//               // 4. Add a special case for the logout button
//               if (id === 'logout') {
//                 return (
//                   <SidebarMenuItem key={title}>
//                     <SidebarMenuButton
//                       onClick={() => setIsLogoutDialogOpen(true)}
//                       className='pr-5 cursor-pointer'
//                     >
//                       <Icon className='text-sidebar-logout' />
//                       <span className='text-sidebar-logout'>{t(title)}</span>
//                     </SidebarMenuButton>
//                   </SidebarMenuItem>
//                 );
//               }

//               // This is the original code for all other navigation links
//               const active = isItemActive(id);
//               return (
//                 <SidebarMenuItem key={title}>
//                   <SidebarMenuButton
//                     asChild
//                     isActive={active}
//                     className={active ? 'active pr-5' : 'pr-5'}
//                   >
//                     <NavLink
//                       to={url}
//                       onClick={() =>
//                         id &&
//                         VALID_SIDEBAR_ITEMS.includes(id as ValidSideBarItem) &&
//                         handleSidebarChange(id as ValidSideBarItem)
//                       }
//                     >
//                       <Icon />
//                       <span>{t(title)}</span>
//                     </NavLink>
//                   </SidebarMenuButton>
//                 </SidebarMenuItem>
//               );
//             })}
//           </SidebarMenu>
//         </SidebarGroupContent>
//       </Sidebar>

//       {/* 5. Render the dialog component outside the Sidebar */}
//       <LogoutConfirmationDialog
//         isOpen={isLogoutDialogOpen}
//         onClose={() => setIsLogoutDialogOpen(false)}
//         onConfirm={handleLogout}
//       />
//     </div>
//   );
// }
