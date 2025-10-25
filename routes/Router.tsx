import { Routes, Route } from 'react-router-dom';
import { AppLayout } from '@/routes/layouts/appLayout/AppLayout';
import { Reports } from '@/features/reports/reports';
import { Homepage } from '@/features/homepage/homepage';
import ErrorBoundaryRoutes from './errorBoundaryRoute';
import { Tasks } from '@/features/tasks/tasks';
import { PromotionRequests } from '@/features/promotionRequests/promotionRequests';
import { ConnectionMessages } from '@/features/connectionMessages/connectionMessages';
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
import { OrganizationalStructure } from '@/features/organizationalStructure/organizationalStructure';
import { PATHS } from "@/constants/paths";
// import { SignIn } from '@/features/signIn/signIn';
export const AppRouter = () => {
  return (
    <ErrorBoundaryRoutes>
      <Routes>
        {/* <Route path='/sign-in' element={<SignIn />} /> */}
        {/* <Route element={<ProtectedRoute />}> */}
        <Route path={`${PATHS.dashboard}`} element={<AppLayout />}>
          <Route path='*' element={<>404</>} />
          <Route index element={<Homepage />} />
          <Route path={`${PATHS.tasks}`} element={<Tasks />} />
          <Route path={`${PATHS.promotionRequests}`} element={<PromotionRequests />} />
          <Route path={`${PATHS.connectionMessages}`} element={<ConnectionMessages />} />
          <Route path={`${PATHS.organizationalStructure}`} element={<OrganizationalStructure />} />
          <Route path={`${PATHS.addEmployee}`} element={<AddEmployee />} />
          <Route path={`${PATHS.allEmployees}`} element={<AllEmployees />} />
          <Route path={`${PATHS.reports}`} element={<Reports />} />
          <Route path={`${PATHS.fingerPrint}`} element={<FingerPrint />} />
          <Route path={`${PATHS.manualAttendance}`} element={<ManualAttendance />} />
          <Route path={`${PATHS.settlementRequests}`} element={<SettlementRequests />} />
          <Route path={`${PATHS.missions}`} element={<Missions />} />
          <Route path={`${PATHS.exceptionsRequests}`} element={<ExceptionsRequests />} />
          <Route path={`${PATHS.exitPermitRequests}`} element={<ExitPermitRequests />} />
          <Route path={`${PATHS.leaveRequests}`} element={<LeaveRequests />} />
          <Route path={`${PATHS.coursesRequests}`} element={<CoursesRequests />} />
          <Route path={`${PATHS.financialReports}`} element={<FinancialReports />} />
          <Route path={`${PATHS.salaries}`} element={<Salaries />} />
          <Route path={`${PATHS.advanceRequests}`} element={<AdvanceRequests />} />

          <Route path={`${PATHS.drinks}`} element={<Drinks />} />
          <Route path={`${PATHS.branches}`} element={<Branches />} />
          <Route path={`${PATHS.companies}`} element={<Companies />} />
          <Route path={`${PATHS.departments}`} element={<Departments />} />
          <Route path={`${PATHS.vacations}`} element={<Vacations />} />
          <Route path={`${PATHS.notifications}`} element={<Notifications />} />
          <Route path={`${PATHS.jobTitles}`} element={<JobTitles />} />
        </Route>
        {/* </Route> */}
      </Routes>
    </ErrorBoundaryRoutes>
  );
};
