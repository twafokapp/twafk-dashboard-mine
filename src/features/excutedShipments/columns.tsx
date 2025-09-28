import { createColumnHelper } from '@tanstack/react-table';
import { t } from 'i18next';
import type { ExcutedShipments } from './excutedShipments.type.ts';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { AppButton } from '@/common/appButton/appButton.tsx';
import { useNavigate } from 'react-router';

const columnsHelper = createColumnHelper<ExcutedShipments>();
export const UseClientColumns = () => {
  const navigate = useNavigate();
  const isArabic = localStorage.getItem('i18nextLng') === 'ar';
  return [
    columnsHelper.accessor('name', {
      header: () => (
        <span className={`flex justify-center  ${isArabic ? 'pl-0 lg:pl-20' : ''}`}>
          {t('clients.name')}
        </span>
      ),
      cell: info => (
        <span
          className={`flex justify-center items-center gap-[12px] overflow-hidden text-ellipsis max-w-[250px] md:max-w-[330px] hover:overflow-visible hover:whitespace-normal hover:break-words `}
        >
          <Avatar className='w-[35px] h-[35px] md:w-[50px] md:h-[50px] rounded-full bg-[#D9D9D9] aspect-ratio-1/1'>
            <AvatarImage src='https://github.com/shadcn.png' />
          </Avatar>
          <span className='p-[10px]'>{String(info.getValue())}</span>
        </span>
      ),
    }),

    columnsHelper.accessor('phone_number', {
      cell: info => info.getValue(),
      header: () => (
        <span className='flex justify-center '>{t('most_wanted_clients.phone_number')}</span>
      ),
    }),
    columnsHelper.accessor('city', {
      cell: info => info.getValue(),

      header: () => <span className='flex justify-center '>{t('most_wanted_clients.city')}</span>,
    }),
    columnsHelper.accessor('number_of_orders', {
      cell: info => info.getValue(),

      header: () => (
        <span className='flex justify-center '>{t('most_wanted_clients.number_of_shipments')}</span>
      ),
    }),

    columnsHelper.accessor('profile', {
      header: () => (
        <span className='flex justify-center '>{t('most_wanted_clients.profile')}</span>
      ),
      cell: params =>  {
        const clientId = params.row.original.id
        return(
        <div className='flex justify-center'>
          <AppButton
            buttonText='عرض'
            width='short'
            onClick={() =>
              navigate(`/reports/edit-client/${clientId}`, {
                  state: {
                    ...params.row.original,
                  },
              })
            }
          />
        </div>
     ) },
    }),
  ];
};
