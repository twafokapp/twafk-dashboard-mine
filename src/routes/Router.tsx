import { Routes, Route } from 'react-router-dom';
import { AppLayout } from '@/routes/layouts/appLayout/AppLayout';
import { Clients } from '@/features/clients/clients';
import { ProductsOrders } from '@/features/productsOrders/productsOrders';
import { ShipsManagement } from '@/features/shipmentsManagement/shipmentsManagment';
import { Reports } from '@/features/reports/reports';
import { Homepage } from '@/features/homepage/homepage';
import { SettingsPage } from '@/features/settingsSystem/settingsSystem';
import { Deliverymen } from '@/features/deliveryman/deliverymen';
import { SingleClient } from '@/features/singleClient/singleClient';
import { OrderDetails } from '@/features/orderDetails/orderDetails';
import { Invoice } from '@/features/invoice/invoice';
import { DeliverymanLogDetails } from '@/features/deliverymanLogDetails/deliverymanLogDetails';
import { DeliverymanRegisterRequestDetails } from '@/features/deliverymanRegisterRequestDetails/deliverymanRegisterRequestDetails';
import { ClientsReports } from '@/features/clientsReports/clientsReports';
import { ShipmentsReports } from '@/features/shipmentsReports/ShipmentsReports';
import { DeliveryMenReports } from '@/features/deliveryMenReports/deliveryMenReports';
import { ProductsReports } from '@/features/productsReports/productsReports';
import { SingleOrder } from '@/features/singleOrder/singleOrder';
import { ShipmentDetails } from '@/features/shipmentDetails/orderDetails';
import { EditClient } from '@/features/editClient/editClient';
// import { SignIn } from '@/features/signIn/signIn';
import ErrorBoundaryRoutes from './errorBoundaryRoute';
import { ProductsClassifications } from '@/features/products/classifications/Classifications';
import { EditProduct } from '@/features/products/editProduct/editProduct';
import { Products } from '@/features/products/products';
import { EditClassification } from '@/features/products/editClassification/editClassification';
import { AddNewProduct } from '@/features/products/addNewProduct/addNewProduct';
import { AddNewCategory } from '@/features/products/addNewCategory/addNewCategory';
import { ProtectedRoute } from './ProtectedRoute';
import { Tasks } from '@/features/tasks/tasks';
import { PromotionRequests } from '@/features/promotionRequests/promotionRequests';
import { ConnectionMessages } from '@/features/connectionMessages/connectionMessages';
import { OrganizationalStructure } from '@/features/organizationalStructure/OrganizationalStructure';
import { AddEmployee } from '@/features/addEmployee/addEmployee';
import { AllEmployees } from '@/features/allEmployees/allEmployees';
import { FingerPrint } from '@/features/fingerPrint/fingerPrint';
import { ManualAttendance } from '@/features/manualAttendance/manualAttendance';
import { SettlementRequests } from '@/features/settlementRequests/settlementRequests';
import { Missions } from '@/features/missions/missions';
import { ExceptionsRequests } from '@/features/exceptionsRequests/exceptionsRequests';
import { ExitPermitRequests } from '@/features/exitPermitRequests/exitPermitRequests';
import { LeaveRequests } from '@/features/leaveRequests/leaveRequests';
import { CoursesRequests } from '@/features/coursesRequests/coursesRequests';
import { FinancialReports } from '@/features/financialReports/financialReports';
import { Salaries } from '@/features/salaries/salaries';
import { AdvanceRequests } from '@/features/advanceRequests/advanceRequests';
import { Drinks } from '@/features/drinks/drinks';
import { Branches } from '@/features/branches/branches';
import { Companies } from '@/features/companies/companies';
import { Departments } from '@/features/departments/departments';
import { Vacations } from '@/features/vacations/vacations';
import { Notifications } from '@/features/notifications/notifications';
import { JobTitles } from '@/features/jobTitles/jobTitles';

export const AppRouter = () => {
  return (
    <ErrorBoundaryRoutes>
      <Routes>
        {/* <Route path='/sign-in' element={<SignIn />} /> */}
        {/* <Route element={<ProtectedRoute />}> */}
        <Route path='/' element={<AppLayout />}>
          <Route path='*' element={<>404</>} />
          <Route index element={<Homepage />} />
          <Route path='tasks' element={<Tasks />} />
          <Route path='/promotion-requests' element={<PromotionRequests />} />
          <Route path='/connection-messages' element={<ConnectionMessages />} />
          <Route path='/organizational-structure' element={<OrganizationalStructure />} />
          <Route path='/add-employee' element={<AddEmployee />} />
          <Route path='/all-employees' element={<AllEmployees />} />
          <Route path='/reports' element={<Reports />} />
          <Route path='/finger-print' element={<FingerPrint />} />
          <Route path='/manual-attendance' element={<ManualAttendance />} />
          <Route path='/settlement-requests' element={<SettlementRequests />} />
          <Route path='/missions' element={<Missions />} />
          <Route path='/exceptions-requests' element={<ExceptionsRequests />} />
          <Route path='/exit-permit-requests' element={<ExitPermitRequests />} />
          <Route path='/leave-requests' element={<LeaveRequests />} />
          <Route path='/courses-requests' element={<CoursesRequests />} />
          <Route path='/financial-reports' element={<FinancialReports />} />
          <Route path='/salaries' element={<Salaries />} />
          <Route path='/advance-requests' element={<AdvanceRequests />} />

          <Route path='/drinks' element={<Drinks />} />
          <Route path='/branches' element={<Branches />} />
          <Route path='/companies' element={<Companies />} />
          <Route path='/departments' element={<Departments />} />
          <Route path='/vacations' element={<Vacations />} />
          <Route path='/notifications' element={<Notifications />} />
          <Route path='/job-titles' element={<JobTitles />} />
        </Route>
        {/* </Route> */}
      </Routes>
    </ErrorBoundaryRoutes>
  );
};
