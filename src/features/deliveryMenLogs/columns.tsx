// Define the type for our data

import { createColumnHelper } from '@tanstack/react-table';
import { t } from 'i18next';
import type { DeliveryManLogTypes } from './deliveryMenLogs.type';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { AppButton } from '@/common/appButton/appButton';
import { useNavigate } from 'react-router';
import type { AppInfinteQueryResult } from '@/types/types';

const columnsHelper = createColumnHelper<DeliveryManLogTypes>();
export const UseDeliveryMenLogsColumns = ({ query }: { query?: AppInfinteQueryResult }) => {
  const navigate = useNavigate();

  return [
    columnsHelper.accessor('name', {
      cell: info => (
        <div className='flex justify-center items-center max-w-[250px] gap-2'>
          <Avatar className='m-auto w-[50.97px] h-[51.011px] aspect-[50.97/51.01]'>
            <AvatarImage src='https://github.com/shadcn.png' className=' ' />
          </Avatar>
          {info.getValue()}
        </div>
      ),
      header: () => (
        <span className='flex justify-center '>{t('deliverymen_management.name')}</span>
      ),
    }),

    columnsHelper.accessor('phone', {
      cell: info => info.getValue(),
      header: () => (
        <span className='flex justify-center '>{t('deliverymen_management.phone_number')}</span>
      ),
    }),

    columnsHelper.accessor('email', {
      cell: info => info.getValue(),
      header: () => (
        <span className='flex justify-center '>{t('deliverymen_management.e_mail')}</span>
      ),
    }),

    columnsHelper.accessor('id', {
      header: () => (
        <span className='flex justify-end px-20'>{t('deliverymen_management.profile')}</span>
      ),
      cell: params => {
        const deliverymanId = params.row?.original?.id;
        return (
          <div className='flex justify-end px-20 '>
            <AppButton
              className='text-nowrap'
              buttonText={t('buttons.show_file')}
              onClick={() => {
                // console.log("deliverymanId", deliverymanId, query?.pages?.flatMap(I=>I), query?.pages?.flatMap(page => page).find(page => page.id == deliverymanId));
                if (deliverymanId && query) {
                  navigate(`/deliverymen/deliveryman-log-details/${deliverymanId}`, {
                    state: query,
                  });
                }
              }}
            />
          </div>
        );
      },
    }),
  ];
};
