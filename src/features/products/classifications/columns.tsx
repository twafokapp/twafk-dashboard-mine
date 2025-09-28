import { createColumnHelper } from '@tanstack/react-table';
import { t } from 'i18next';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { AppButton } from '@/common/appButton/appButton';
import { useNavigate } from 'react-router';
import type { Classifications } from './classifications.types';

const columnHelper = createColumnHelper<Classifications>();

export const useClassificationsColumns = () => {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  const navigate = useNavigate();

  return [
    columnHelper.accessor('baseImage', {
      header: () => (
        <div
          className={`flex items-center justify-between  ${isArabic ? 'pr-[150px] ' : 'pl-[150px] '} font-400 text-[16px] md:w-[50%]  w-full gap-[160px]`}
        >
          <span className=''>{t('classification_management.category')}</span>
          <span className=''>{t('classification_management.quantity')}</span>
        </div>
      ),
      cell: ({ row }) => (
        <div
          className={`flex items-center justify-between ${isArabic ? 'pr-[68px] ' : 'pl-[68px]'} md:w-[50%]  w-full gap-[250px]`}
        >
          <div className='flex gap-5 items-center'>
            <Avatar className='w-[35px] h-[35px] md:w-[50px] md:h-[50px] rounded-[4px] bg-[#D9D9D9] aspect-ratio-1/1'>
              <AvatarImage src={row.original.baseImage} />
            </Avatar>
            <span className='p-[10px] overflow-hidden text-ellipsis max-w-[88px]  md:max-w-[50px] max-h-[60px] hover:overflow-hidden hover:whitespace-normal hover:break-words sm:hover:text-[14px]'>
              {row?.original?.cat?.name}
            </span>
          </div>
          <span className='p-[10px]'>{row?.original?.quantity} </span>
        </div>
      ),
    }),

    columnHelper.display({
      id: 'actions',
      header: () => (
        <div
          className={`flex items-center justify-end ${isArabic ? 'pl-[101px] pr-[108px]' : 'pr-[85px] pl-[108px]'} font-400 text-[16px]`}
        >
          <span className=' '>{t('classification_management.procedure')}</span>
        </div>
      ),
      cell: params => {
        const classificationId = params?.row?.original?.id;

        return (
          <div
            className={`flex items-center justify-end ${isArabic ? 'pl-[68px] pr-[108px]' : 'pr-[68px] pl-[108px]'}`}
          >
            <AppButton
              onClick={() => {
                navigate(`/products/products-management/edit-classification/${classificationId}`, {
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
