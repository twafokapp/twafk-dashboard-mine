// Define the type for our data

import { createColumnHelper } from '@tanstack/react-table';
import { t } from 'i18next';
import { AppChip } from '@/common/appChip/appChips';
import { AppButton } from '@/common/appButton/appButton';
import { useNavigate } from 'react-router';
import { PAYMENT_METHOD } from '@/constants/status.constant';
import type { ProductsOrders } from './productsOrders.type';

const columnsHelper = createColumnHelper<ProductsOrders>();

export const UseProductOrdersColumns = () => {
  const navigate = useNavigate();
  return [
    columnsHelper.accessor('id', {
      cell: info => info.getValue(),
      header: () => <span className='flex justify-center '>{t('products_orders.order_id')}</span>,
    }),

    columnsHelper.accessor('user.name', {
      cell: info => info.getValue(),
      header: () => (
        <span className='flex justify-center '>{t('products_orders.client_name')}</span>
      ),
    }),

    columnsHelper.accessor('product.name', {
      cell: info => info.getValue(),
      header: () => <span className='flex justify-center '>{t('products_orders.product')}</span>,
    }),

    columnsHelper.accessor('payment_method', {
      cell: info => {
        const value = info.getValue();
        return value === PAYMENT_METHOD.CASH ? 'Cash' : 'Visa';
      },

      header: () => <span className='flex justify-center '>{t('products_orders.pay_method')}</span>,
    }),

    columnsHelper.accessor('status', {
      header: () => (
        <span className='flex justify-center '>{t('products_orders.order_status')}</span>
      ),
      cell: () => <AppChip chipText={t('chips.new')} color='primary' />,
    }),
    columnsHelper.accessor('id', {
      header: () => <span className='flex justify-center '>{t('products_orders.invoice')}</span>,
      cell: params => (
        <AppButton
          width='short'
          buttonText={t('buttons.show')}
          onClick={() =>
            navigate('/products-orders/order-details', {
              state: {
                ...params.row.original,
              },
            })
          }
        />
      ),
    }),
  ];
};
