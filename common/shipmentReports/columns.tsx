import { createColumnHelper } from '@tanstack/react-table';
import type { ShipmentsReports } from './shipmentsReports.type';
import { useTranslation } from 'react-i18next';

const columnsHelper = createColumnHelper<ShipmentsReports>();
export const useShipmentsColumns = () => {
  const { t } = useTranslation();
  return [
    columnsHelper.accessor('shipmentNumber', {
      header: () => t('shipments_reports.shipment_number'),
      cell: info => info.getValue(),
    }),
    columnsHelper.accessor('orderDate', {
      header: () => t('shipments_reports.date'),
      cell: info => info.getValue(),
    }),
    columnsHelper.accessor('weight', {
      header: () => t('shipments_reports.weight'),
      cell: info => info.getValue(),
    }),
    columnsHelper.accessor('shipmentType', {
      header: () => t('shipments_reports.shipment_type'),
      cell: info => info.getValue(),
    }),
    columnsHelper.accessor('clientName', {
      header: () => t('shipments_reports.client_name'),
      cell: info => info.getValue(),
    }),
    columnsHelper.accessor('destinationFrom', {
      header: () => t('shipments_reports.destination_from'),
      cell: info => info.getValue(),
    }),
    columnsHelper.accessor('deliveryLocation', {
      header: () => t('shipments_reports.Delivering_location'),
      cell: info => info.getValue(),
    }),
    columnsHelper.accessor('deliveryDate', {
      header: () => t('shipments_reports.Delivering_date'),
      cell: info => info.getValue(),
    }),
    columnsHelper.accessor('price', {
      header: () => t('products_management.price'),
      cell: info => (
        <span className='text-[#01C0AA] font-semibold'>{`ر.س ${info.getValue()}`}</span>
      ),
    }),
  ];
};
