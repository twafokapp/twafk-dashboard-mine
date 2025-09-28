import { AppButton } from '@/common/appButton/appButton';
import { LayoutTitle } from '@/common/layoutTitle/layoutTitle';
import { useTranslation } from 'react-i18next';

export const Invoice = () => {
  const { t } = useTranslation();
  return (
    <>
    <LayoutTitle title={t('invoice.title')} />
    <div className='overflow-x-auto'>
      <div className=' w-[56rem] flex flex-col items-center m-auto gap-y-[26px] mt-[69px]'>
        <div className='flex gap-2.5 justify-end w-full'>
          <AppButton buttonText={t('buttons.print')} />
          <AppButton buttonText={t('buttons.download')} />
        </div>
        <div className='w-[56rem] h-[49rem] rounded-[0.75rem] bg-white'>
          <h4 className='pt-[1.5rem] text-center font-light text-[1.25rem]'>
            {t('invoice.title')}
          </h4>
        </div>
      </div>
    </div>
    </>
  );
};
