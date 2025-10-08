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
import { DeliveryMenLogs } from '@/features/deliveryMenLogs/deliveryMenLogs';
import { DeliverymanLogDetails } from '@/features/deliverymanLogDetails/deliverymanLogDetails';
import { DeliverymanRegisterRequestDetails } from '@/features/deliverymanRegisterRequestDetails/deliverymanRegisterRequestDetails';
import { ClientsReports } from '@/features/clientsReports/clientsReports';
import { ShipmentsReports } from '@/features/shipmentsReports/ShipmentsReports';
import { DeliveryMenReports } from '@/features/deliveryMenReports/deliveryMenReports';
import { ProductsReports } from '@/features/productsReports/productsReports';
import { SingleOrder } from '@/features/singleOrder/singleOrder';
import { ShipmentDetails } from '@/features/shipmentDetails/orderDetails';
import { EditClient } from '@/features/editClient/editClient';
import { SignIn } from '@/features/signIn/signIn';
import ErrorBoundaryRoutes from './errorBoundaryRoute';
import { ProductsClassifications } from '@/features/products/classifications/Classifications';
import { EditProduct } from '@/features/products/editProduct/editProduct';
import { Products } from '@/features/products/products';
import { EditClassification } from '@/features/products/editClassification/editClassification';
import { AddNewProduct } from '@/features/products/addNewProduct/addNewProduct';
import { AddNewCategory } from '@/features/products/addNewCategory/addNewCategory';
// import { ProtectedRoute } from './ProtectedRoute';

export const AppRouter = () => {
  return (
    <ErrorBoundaryRoutes>
      <Routes>
        {/* <Route path='/sign-in' element={<SignIn />} /> */}
        {/* <Route element={<ProtectedRoute />}> */}
          <Route path='/' element={<AppLayout />}>
            <Route index element={<Homepage />} />
            <Route path='deliverymen-logs' element={<DeliveryMenLogs />} />
            <Route
              path='/deliverymen/deliveryman-log-details'
              element={<DeliverymanLogDetails />}
            />
            <Route
              path='/deliverymen/deliveryman-register-request-details'
              element={<DeliverymanRegisterRequestDetails />}
            />
            <Route path='*' element={<>404</>} />
            <Route path='clients' element={<Clients />} />
            <Route path='/clients/:clientId' element={<SingleClient />} />
            <Route path='clients/order/:orderId' element={<SingleOrder />} />
            <Route path='invoice' element={<Invoice />} />
            <Route path='/products-orders' element={<ProductsOrders />} />
            <Route path='/products-orders/order-details' element={<OrderDetails />} />
            <Route path='shipment-management' element={<ShipsManagement />} />
            <Route path='shipment-management/:shipmentId' element={<ShipmentDetails />} />
            <Route path='deliverymen' element={<Deliverymen />} />
            <Route path='/products' element={<Products />} />
            <Route
              path='/products/products-management/edit-product/:productId'
              element={<EditProduct />}
            />
            <Route
              path='/products/products-classifications'
              element={<ProductsClassifications />}
            />
            <Route
              path='/products/products-management/edit-classification/:classificationId'
              element={<EditClassification />}
            />
            <Route path='/products/add-new-product' element={<AddNewProduct />} />
            <Route path='/products/add-new-category' element={<AddNewCategory />} />
            <Route path='reports' element={<Reports />} />
            <Route path='/reports/edit-client/:clientId' element={<EditClient />} />
            <Route path='settings' element={<SettingsPage />} />
            <Route path='reports/clients_reports' element={<ClientsReports />} />
            <Route path='reports/shipments_reports' element={<ShipmentsReports />} />
            <Route path='reports/deliverymen_reports' element={<DeliveryMenReports />} />
            <Route path='reports/products_reports' element={<ProductsReports />} />
          </Route>
        {/* </Route> */}
      </Routes>
    </ErrorBoundaryRoutes>
  );
};
