import { useTranslation } from 'react-i18next';
import { createColumnHelper } from '@tanstack/react-table';
import { useNavigate } from 'react-router';
import type { ClientOrder } from './singleClient.type';
import { AppChip } from '@/common/appChip/appChips';
import { AppButton } from '@/common/appButton/appButton';

const columnHelper = createColumnHelper<ClientOrder>();

export const useOrdersColumns = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const getStatusChip = (status: ClientOrder['orderStatus']) => {
    switch (status) {
      case 'new':
        return <AppChip chipText={t('chips.new')} color='primary' />;
      case 'processing':
        return <AppChip chipText={t('chips.under_processing')} color='warning' />;
      case 'completed':
        return <AppChip chipText={t('chips.completed')} color='success' />;
      case 'canceled':
        return <AppChip chipText={t('chips.canceled')} color='error' />;
      default:
        return null;
    }
  };

  return [
    columnHelper.accessor('orderNumber', {
      header: () => t('single_client.order_number'),
      cell: info => <span className='font-semibold'>{info.getValue()}</span>,
    }),
    columnHelper.accessor('product', {
      header: () => t('single_client.product'),
      cell: info => info.getValue(),
    }),
    columnHelper.accessor('paymentMethod', {
      header: () => t('single_client.pay_method'),
      cell: info => info.getValue(),
    }),
    columnHelper.accessor('orderStatus', {
      header: () => t('single_client.order_status'),
      cell: info => <div className='flex justify-center'>{getStatusChip(info.getValue())}</div>,
    }),
    columnHelper.accessor('invoiceAction', {
      header: () => t('single_client.invoice'),
      cell: params => {
        const clientId = params?.row?.original?.orderNumber.split('#')[1];
        return (
          <div className='flex justify-center'>
            <AppButton
              buttonText={t('buttons.show')}
              width='short'
              onClick={() => {
                navigate(`/clients/order/${clientId}`, {
                  state: {
                    ...params.row.original,

                  },
                });
              }}
            />
          </div>
        );
      },
    }),
  ];
};
