import React from 'react';
import { LayoutTitle } from '@/common/layoutTitle/layoutTitle';
import { InvoiceDetails } from '../../common/details/invoiceDetails';
import { ProductDetails } from '../../common/details/productDetails';
import { ShippingDetails } from '../../common/details/shippingDetails';
import { t } from 'i18next';

export const OrderDetails: React.FC = () => {
  const orderNumber = '#553265';
  return (
    <>
      <LayoutTitle title={t('products_orders.order_details.order') + ' ' + orderNumber} />
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
