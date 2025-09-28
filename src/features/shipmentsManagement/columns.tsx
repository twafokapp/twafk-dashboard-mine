import { createColumnHelper } from '@tanstack/react-table';
import { t } from 'i18next';
import type { ShipmentsManagement } from './shipmentsManagement.type';
import { AppChip } from '@/common/appChip/appChips';
import { getShipmentsStatusConfig } from './getShipmentsStatusConfig';

const columnsHelper = createColumnHelper<ShipmentsManagement>();

export const UseShipmentsManagmentColumns = () => {
  return [
    columnsHelper.accessor('id', {
      cell: info => info.getValue(),
      header: () => (
        <span className='flex justify-center'>{t('ships_management.ship_number')}</span>
      ),
    }),

    columnsHelper.accessor('name', {
      cell: info => info.getValue(),
      header: () => (
        <span className='flex justify-center '>{t('ships_management.order_number')}</span>
      ),
    }),

    columnsHelper.accessor('name', {
      cell: info => info.getValue(),

      header: () => (
        <span className='flex justify-center '>{t('ships_management.client_name')}</span>
      ),
    }),

    columnsHelper.accessor('address', {
      cell: info => info.getValue(),
      header: () => <span className='flex justify-center '>{t('ships_management.address')}</span>,
    }),

    columnsHelper.accessor('user.name', {
      header: () => (
        <span className='flex justify-center '>{t('ships_management.deliveryman')}</span>
      ),
      cell: info => info.getValue(),
    }),
    columnsHelper.accessor('ship_or_delivery_date', {
      header: () => (
        <span className='flex justify-center '>
          {t('ships_management.ship_or_delivering_date')}
        </span>
      ),
      cell: info => info.getValue(),
    }),
    columnsHelper.accessor('status', {
      header: () => (
        <span className='flex justify-center'>{t('ships_management.ship_status')}</span>
      ),
      cell: info => {
        const { label, color } = getShipmentsStatusConfig(info.row.original.status);
        return <AppChip chipText={label} color={color} />;
      },
    }),
  ];
};
