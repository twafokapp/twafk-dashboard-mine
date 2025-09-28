import { createColumnHelper } from '@tanstack/react-table';
import { t } from 'i18next';
import type { TClientColumns } from './clients.types';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { useNavigate } from 'react-router';
import { STATUS } from '@/constants/status.constant';
import { AppChip } from '@/common/appChip/appChips';
import { AppButton } from '@/common/appButton/appButton';

const columnsHelper = createColumnHelper<TClientColumns>();
export const UseClientColumns = () => {
  const navigate = useNavigate();

  return [
    columnsHelper.accessor('image', {
      cell: info => (
        <Avatar className='m-auto w-[50px] h-[50px] '>
          <AvatarImage src={info?.getValue() ?? 'https://github.com/shadcn.png'} className='' />
        </Avatar>
      ),
      header: () => <></>,
    }),

    columnsHelper.accessor('name', {
      cell: info => info.getValue(),
      header: () => <span className='flex justify-center'>{t('clients.name')}</span>,
    }),

    columnsHelper.accessor('phone', {
      cell: info => info.getValue(),
      header: () => <span className='flex justify-center '>{t('clients.phone_number')}</span>,
    }),

    columnsHelper.accessor('email', {
      cell: info => info.getValue(),
      header: () => <span className='flex justify-center '>{t('clients.e_mail')}</span>,
    }),

    columnsHelper.accessor('country.name', {
      header: () => <span className='flex justify-center '>{t('clients.city')}</span>,
      cell: info => info.getValue(),
    }),

    columnsHelper.accessor('type', {
      header: () => <span className='flex justify-center'>{t('clients.pay_methods')}</span>,
      cell: info => info.getValue(),
    }),

    columnsHelper.accessor('number_of_purchases', {
      header: () => <span className='flex justify-center'>{t('clients.num_of_purchases')}</span>,
      cell: info => info.getValue(),
    }),

    columnsHelper.accessor('status', {
      header: () => <span className='flex justify-center '>{t('clients.status')}</span>,
      cell: info => (
        <div className='flex justify-center'>
          <AppChip
            chipText={info.getValue() === STATUS.ONLINE ? 'نشط' : 'محظور'}
            color={info.getValue() ? 'success' : 'error'}
          />
        </div>
      ),
    }),
    columnsHelper.display({
      id: 'orders_history',
      header: () => <span className='flex justify-center '>{t('clients.orders_history')}</span>,
      cell: params => {
        const clientId = params?.row?.original?.id;

        return (
          <div className='flex justify-center'>
            <AppButton
              width='short'
              buttonText='عرض'
              onClick={() =>
                navigate(`/clients/${clientId}`, {
                  state: {
                    ...params.row.original,
                  },
                })
              }
            />
          </div>
        );
      },
    }),
  ];
};
