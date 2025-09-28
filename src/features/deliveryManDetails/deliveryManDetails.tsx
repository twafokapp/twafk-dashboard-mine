import { LayoutTitle } from '@/common/layoutTitle/layoutTitle';
import { useTranslation } from 'react-i18next';

export const DeliveryManDetails = () => {
  const { t } = useTranslation();
  return (
    <div>
      <LayoutTitle title={t('احمد على حسن')} />
      <div className=' grid grid-cols-30 grid-rows-30'>
        <div className='bg-amber-200 col-span-20'>r</div>
        <div className='bg-amber-400 col-start-21'>l</div>
      </div>
    </div>
  );
};
