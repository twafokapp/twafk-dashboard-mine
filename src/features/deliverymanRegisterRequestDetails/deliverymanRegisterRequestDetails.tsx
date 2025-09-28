


import { AppBars } from '@/common/appBars/appBars';
import { AppLabels } from '@/common/appLabel/appLabels';
import { useTranslation } from 'react-i18next';
import vehicle from '@/assets/imgs/vehicle.png';
import small_vehicle from '@/assets/imgs/small_vehicle.png';
import { VehicleLicense } from './vehicleLicense';
import { useNavigate } from 'react-router';
import { ChevronLeft } from 'lucide-react';
import { AppButton } from '@/common/appButton/appButton';

type LayoutTitleProps = {
  onBackClick?: () => void;
};

export const DeliverymanRegisterRequestDetails = ({ onBackClick }: LayoutTitleProps) => {
    const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  const navigate = useNavigate();

  const handleBackClick = () => {
    if (onBackClick) {
      onBackClick();
    } else {
      navigate(-1);
    }
  };
  return (
    <div>
      <div className='flex justify-between items-center mt-11 gap-5 flex-wrap'>
        <div className='flex items-center gap-5'>
            <img
              src='/src/assets/imgs/ksa.png'
              className='w-[3.18563rem] h-[3.18563rem] rounded-[3.1rem] shadow-card '
              alt='ksa'
            />
           <h1 className='font-light text-[25px] text-nowrap'>{t('احمد على حسن')}</h1>
        </div>
        <div className='flex gap-[25px]'>
          <div className='flex gap-[12px]'>
              <AppButton color="secondary" buttonText={t("buttons.Accept")} width="short" />
              <AppButton color="error" buttonText={t("buttons.refuse")} width="short" />
          </div>
          <button className='flex items-center gap-[13px] cursor-pointer ' onClick={handleBackClick}>
            <span className='text-[20px] font-[Almarai] font-[400]'>{t('buttons.back')}</span>
            <span>
              <ChevronLeft
                color='#292D32'
                size={30}
                className={`${isArabic ? 'rotate-0' : 'rotate-180'}`}
              />
            </span>
          </button>
        </div>
      </div>
      {/* Main grid container: 20 columns total */}
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-6 mt-[40px]'>
        {/* START: Right Column (Main Content - 12 columns wide) */}
        <div className='lg:col-span-7 flex flex-col gap-6'>
          {/* Card 1: Personal Data */}
          <div className='bg-white relative w-full py-[1.75rem] px-[1.125rem] rounded-2xl shadow-md'>
            <AppLabels
              labelText={t('labels.personal_data')}
              spaceX='0px'
              className='absolute top-0 right-0 rounded-tr-2xl w-fit h-fit rounded-bl-2xl py-[10px]'
              color='primary'
            />
            <div className='flex flex-col gap-2 mt-[55px]'>
              <AppBars title={t('delivermen_log.name')} data={t('أحمد حسني ')} />
              <AppBars title={t('delivermen_log.id_number')} data={t('120356198722588')} />
              <AppBars title={t('delivermen_log.phone_number')} data={t('+9665252525')} />
              <AppBars title={t('delivermen_log.e_mail')} data={t('ux@ahmed.com')} />
            </div>
          </div>

          {/* Card 2: Vehicle Data */}
          <div className='relative bg-white rounded-2xl p-4 shadow-md'>
            <AppLabels
              labelText={t('labels.vehicle_data')}
              spaceX='0px'
              className='absolute top-0 right-0 rounded-tr-2xl w-fit h-fit rounded-bl-2xl py-[10px]'
              color='primary'
            />
            <div className='grid grid-cols-1 gap-x-[40px] gap-y-[20px] md:grid-cols-2  mt-[55px] '>
              {/* Vehicle Info Block */}
              <div className=' col-span-2 xl:col-span-1 flex justify-around gap-2 items-center border border-[#EAEAEA] rounded-md p-4 flex-wrap lg:flex-nowrap'>
                  <div className='flex flex-col justify-center items-center gap-2 flex-wrap lg:flex-nowrap'>
                      <div className='flex items-center gap-1.5 '>
                          <img src={small_vehicle} alt='small_vehicle' />
                          <h4 className='text-[#515151] text-[11px]'>{t('delivermen_log.vehicle_type')}</h4>
                      </div>
                      <span className='border border-[#EAEAEA] p-4 rounded-xl text-center'>
                          <img src={vehicle} alt='vehicle' className='mx-auto mb-2' />
                          <h5 className='text-[#4A4A4A] text-[9px]'>{t('delivermen_log.freeze_van')}</h5>
                      </span>
                  </div>
                  <div className='flex flex-col justify-center items-center gap-2 '>
                      <div className='flex items-center gap-1'>
                          <img src={small_vehicle} alt='small_vehicle' />
                          <h4 className='text-[#515151] text-[11px]'>{t('delivermen_log.vehicle_model')}</h4>
                      </div>
                      <span className='border border-[#EAEAEA] py-7 px-4 rounded-xl'>
                            <h5 className='text-[#4A4A4A] text-[9px]'>JAC 42 CBM</h5>
                      </span>
                  </div>
                  <div className='flex flex-col justify-center items-center gap-2'>
                      <div className='flex items-center gap-1'>
                          <img src={small_vehicle} alt='small_vehicle' />
                          <h4 className='text-[#515151] text-[11px]'>{t('delivermen_log.plate_number')}</h4>
                      </div>
                      <span className='border border-[#EAEAEA] py-7 px-4 rounded-xl'>
                            <h5 className='text-[#4A4A4A] text-[9px]'>ا ب ه - 7529</h5>
                      </span>
                  </div>
              </div>

              {/* Licenses */}
              <div className=' col-span-2 flex justify-between items-center  gap-[40px] flex-wrap lg:flex-nowrap'>
                <VehicleLicense licenseType={t('delivermen_log.driving_license')} />
                <VehicleLicense licenseType={t('delivermen_log.vehicle_license')} />
              </div>
            </div>
          </div>

          {/* Card 3: Address */}
          <div className='bg-white relative rounded-2xl p-4 min-h-[6rem] shadow-md'>
             <AppLabels
               labelText={t('labels.address')}
              spaceX='0px'
              className='absolute top-0 right-0 rounded-tr-2xl w-fit h-fit rounded-bl-2xl py-[10px]'
              color='primary'
             />
             {/* Address content goes here */}
          </div>
        </div>
        {/* END: Right Column */}

        {/* START: Left Column (Charts - 8 columns wide) */}
        <div className='lg:col-span-5'>
          <div className='bg-white relative w-full p-6 rounded-2xl shadow-md'>
            <AppLabels
              labelText={t('labels.sales_and_transfers')}
              spaceX='0px'
              className='absolute top-0 right-0 rounded-tr-2xl w-fit h-fit rounded-bl-2xl py-[10px]'
              color='primary'
            />
            <div className='flex flex-col gap-4 pt-8 mt-[55px] h-auto lg:h-[633px] justify-center items-center'>
              <h1 className='text-[24px] font-400 text-[#D7D7D7]'>{t('delivermen_log.no_info')}</h1>
            </div>
          </div>
        </div>
        {/* END: Left Column */}
      </div>
    </div>
  );
};
