import { createColumnHelper } from '@tanstack/react-table';
import { t } from 'i18next';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import type { ProductReports } from './productReports.type';

const columnsHelper = createColumnHelper<ProductReports>();
export const UseProductMenColumns = () => {
  return [
    columnsHelper.accessor('products', {
      header: () => (
        <span className={`flex justify-center font-400 text-[16px]`}>
          {t('products_reports.product')}
        </span>
      ),
      cell: info => (
        <div className={`flex justify-center items-center gap-[12px] `}>
          <Avatar className='w-[50px] h-[50px] rounded-[4px] bg-[#D9D9D9] aspect-ratio-1/1'>
            <AvatarImage src='https://github.com/shadcn.png' />
          </Avatar>
          <span className='p-[10px] '>{String(info.getValue())}</span>
        </div>
      ),
    }),

    columnsHelper.accessor('classification', {
      cell: info => <span className='flex justify-center '> {String(info.getValue())}</span>,
      header: () => (
        <span className='flex justify-center font-400 text-[16px]'>
          {t('products_reports.classification')}
        </span>
      ),
    }),

    columnsHelper.accessor('stock', {
      cell: info => <span className='flex justify-center '> {String(info.getValue())}</span>,
      header: () => (
        <span className='flex justify-center font-400 text-[16px]'>
          {t('products_reports.stock')}
        </span>
      ),
    }),

    columnsHelper.accessor('price', {
      cell: info => (
        <span className='flex justify-center text-[#01C0AA] font-[500] font-[IBM_Plex_Sans]'>
          {' '}
          {String(info.getValue())}
        </span>
      ),
      header: () => (
        <span className='flex justify-center font-400 text-[16px]'>
          {t('products_reports.price')}
        </span>
      ),
    }),

    columnsHelper.accessor('total_orders', {
      cell: info => (
        <span className='flex justify-center font-[500] font-[IBM_Plex_Sans]'>
          {' '}
          {String(info.getValue())}
        </span>
      ),
      header: () => (
        <span className='flex justify-center font-400 text-[16px]'>
          {t('products_reports.total_orders')}
        </span>
      ),
    }),
  ];
};
