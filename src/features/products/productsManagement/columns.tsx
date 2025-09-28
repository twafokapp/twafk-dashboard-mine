import { createColumnHelper } from '@tanstack/react-table';
import { t } from 'i18next';
import type { ProductsManagementTypes } from './productsManagement.type';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { AppButton } from '@/common/appButton/appButton';
import { useNavigate } from 'react-router';

const columnsHelper = createColumnHelper<ProductsManagementTypes>();

export const useProductManagementColumns = () => {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  const navigate = useNavigate();

  return [
    columnsHelper.accessor('name', {
      header: () => (
        <div className='flex items-center justify-center'>
          {t('products_management.product_name')}{' '}
        </div>
      ),
      cell: info => (
        <div
          className={`flex items-center gap-[12px] overflow-hidden text-ellipsis max-w-[250px] md:max-w-[330px] hover:overflow-visible hover:whitespace-normal hover:break-words ${isArabic ? 'pr-[68px] md:pr-[102px] text-right' : 'pl-[68px] md:pl-[102px] text-left'}`}
        >
          <Avatar className='w-[35px] h-[35px] md:w-[50px] md:h-[50px] rounded-[4px] bg-[#D9D9D9] aspect-ratio-1/1'>
            <AvatarImage src={info.row.original.baseImage} />
          </Avatar>
          <span className='p-[10px]'>{String(info.getValue())}</span>
        </div>
      ),
    }),

    columnsHelper.accessor('cat', {
      header: () => (
        <div className='flex items-center justify-center'>{t('products_management.category')} </div>
      ),
      cell: info => {
        const categoryName = info.row.original?.cat?.name;
        return (
          <div className='flex items-center justify-center '>
            <span className='overflow-hidden text-ellipsis max-w-[100px] hover:overflow-visible hover:whitespace-normal hover:break-words '>
              {categoryName}
            </span>
          </div>
        );
      },
    }),

    columnsHelper.accessor('id', {
      header: () => (
        <div className='flex items-center justify-center'>
          {t('products_management.expected_date')}{' '}
        </div>
      ),
      cell: info => (
        <div className='flex items-center justify-center'>{String(info.getValue())}</div>
      ),
    }),

    columnsHelper.accessor('quantity', {
      header: () => (
        <div className='flex items-center justify-center'>{t('products_management.quantity')} </div>
      ),
      cell: info => (
        <div className='flex items-center justify-center'>{String(info.getValue())}</div>
      ),
    }),

    columnsHelper.accessor('price', {
      header: () => (
        <div className='flex items-center justify-center'>{t('products_management.price')} </div>
      ),
      cell: info => {
        const value = info.getValue();

        return (
          <div>
            <div
              className={`flex items-center justify-center text-[#01C0AA] font-[500] font-[IBM_Plex_Sans]   `}
            >
              {Number(value)}
            </div>
          </div>
        );
      },
    }),

    columnsHelper.accessor('id', {
      id: 'actions',
      header: () => (
        <div
          className={`${isArabic ? 'pr-[99px]' : ' pl-[99px]'} font-400 text-[16px] flex items-center justify-center`}
        >
          {t('products_management.procedure')}
        </div>
      ),
      cell: params => {
        const productId = params?.row?.original?.id;

        return (
          <div
            className={
              isArabic ? 'pr-[99px]' : 'pr-[8px] pl-[110px] flex items-center  justify-center '
            }
          >
            <AppButton
              onClick={() => {
                navigate(`/products/products-management/edit-product/${productId}`, {
                  state: {
                    ...params.row.original,
                  },
                });
              }}
            >
              <div className='flex items-center gap-[5px] '>
                <span>{t('buttons.edit')}</span>
                <ChevronDown className='w-[24px] h-[24px]' />
              </div>
            </AppButton>
          </div>
        );
      },
    }),
  ];
};
