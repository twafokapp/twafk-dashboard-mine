import { createColumnHelper } from '@tanstack/react-table';
import { t } from 'i18next';
import type { NewClients } from './newClients.type';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { AppChip } from '@/common/appChip/appChips';
import { AppButton } from '@/common/appButton/appButton';
import { useNavigate } from 'react-router';

const columnsHelper = createColumnHelper<NewClients>();
export const UseClientColumns = () => {
  const navigate = useNavigate();

  return [
    columnsHelper.accessor('name', {
      header: () => <span className={'flex justify-center '}>{t('clients_reports.name')}</span>,
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
      header: () => <span className='flex justify-center '>{t('clients_reports.phone_number')}</span>,
    }),

    columnsHelper.accessor('e_mail', {
      cell: info => info.getValue(),
      header: () => <span className='flex justify-center '>{t('clients_reports.e_mail')}</span>,
    }),

    columnsHelper.accessor('city', {
      cell: info => info.getValue(),
      header: () => <span className='flex justify-center '>{t('clients_reports.city')}</span>,
    }),

    columnsHelper.accessor('status', {
      header: () => <span className='flex justify-center '>{t('clients_reports.status')}</span>,
      cell: () => (
        <div className='flex justify-center'>
          <AppChip chipText='نشط' color='success' />
        </div>
      ),
    }),
    columnsHelper.accessor('list_of_orders', {
      header: () => <span className='flex justify-center '>{t('clients_reports.profile')}</span>,
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
