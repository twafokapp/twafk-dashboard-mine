import { useLocation } from 'react-router';
import { ProductDetails } from '../../common/details/productDetails';
import { InvoiceDetails } from '../../common/details/invoiceDetails';
import { ShippingDetails } from '../../common/details/shippingDetails';
import { LayoutTitle } from '@/common/layoutTitle/layoutTitle';
import { t } from 'i18next';

export const ShipmentDetails = () => {
  const { state } = useLocation();
  return (
    <>
      <LayoutTitle title={t('ships_management.shipment') + ' ' + state.id} />

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-[33px]  mt-[92px]'>
        <div className='lg:col-span-2 flex flex-col gap-[32px]'>
          <ProductDetails />
          <ShippingDetails />
        </div>

        <div className='lg:col-span-1'>
          <InvoiceDetails />
        </div>
      </div>
    </>
  );
};
