import license from '@/assets/imgs/license.png';
import { AppButton } from '@/common/appButton/appButton';
import small_vehicle from '@/assets/imgs/small_vehicle.png';
import { useTranslation } from 'react-i18next';
interface VehicleLicenseProps {
  licenseType: string;
}
export const VehicleLicense = ({ licenseType }: VehicleLicenseProps) => {
  const { t } = useTranslation();

  return (
    <div className='w-full flex flex-col justify-between items-start border-[0.686px] border-[#EAEAEA] col-span-6 row-span-6 rounded-[0.34288rem] px-[0.5rem] py-[0.8rem] '>
      <div className='flex justify-between items-center gap-1.5 w-full '>
        <div className='flex justify-between items-center gap-1.5 '>
          <img src={small_vehicle} alt='small_vehicle' />
          <h4 className='text-[#CDCDCD] text-[11px]'>{licenseType}</h4>
        </div>
        <AppButton
          color='primary'
          buttonText={t('buttons.download')}
          fontSize='small'
          space='xsmall'
          height='xsmall'
        />
      </div>
      <div className='flex gap-1 justify-between w-full pt-2.5 flex-wrap xl:flex-nowrap'>
        <div className='flex justify-start w-full border-[0.686px] border-[#EAEAEA] p-2 rounded-[0.34288rem] gap-1'>
          <img src={license} alt='' />
          <h4 className='text-soft-teal self-end text-[9px]'>{t('delivermen_log.right_side')}</h4>
        </div>
        <div className='flex justify-start w-full border-[0.686px] border-[#EAEAEA] p-2 rounded-[0.34288rem] gap-1'>
          <img src={license} alt='' />
          <h4 className='text-soft-teal self-end text-[9px]'>{t('delivermen_log.left_side')}</h4>
        </div>
      </div>
    </div>
  );
};
