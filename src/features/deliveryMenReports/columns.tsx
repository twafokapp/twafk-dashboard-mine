import { createColumnHelper } from '@tanstack/react-table';
import { t } from 'i18next';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { AppButton } from '@/common/appButton/appButton';
import { useNavigate } from 'react-router';
import type { DeliveryMenReports } from './deliverymenReports.type';

const columnsHelper = createColumnHelper<DeliveryMenReports>();
export const UseDeilveryMenColumns = () => {
  const navigate = useNavigate();

  return [
    columnsHelper.accessor('name', {
      header: () => (
        <span className={`flex justify-center `}>
          {t('deliverymen_reports.name')}
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

    columnsHelper.accessor('products', {
      cell: info => info.getValue(),
      header: () => (
        <span className='flex justify-center '>{t('deliverymen_reports.products')}</span>
      ),
    }),
    columnsHelper.accessor('number_of_transfers', {
      cell: info => info.getValue(),
      header: () => (
        <span className='flex justify-center '>{t('deliverymen_reports.number_of_transfers')}</span>
      ),
    }),

    columnsHelper.accessor('requests', {
      cell: info => info.getValue(),
      header: () => (
        <span className='flex justify-center '>{t('deliverymen_reports.requests')}</span>
      ),
    }),

    columnsHelper.accessor('total_sales', {
      cell: info => info.getValue(),
      header: () => (
        <span className='flex justify-center '>{t('deliverymen_reports.total_sales')}</span>
      ),
    }),

    columnsHelper.accessor('profile', {
      header: () => (
        <span className='flex justify-center '>{t('deliverymen_reports.profile')}</span>
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
