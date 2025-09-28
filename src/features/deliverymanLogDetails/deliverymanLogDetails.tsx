import { AppBars } from '@/common/appBars/appBars';
import { AppCards } from '@/common/appCard/appCards';
import { AppLabels } from '@/common/appLabel/appLabels';
import { useTranslation } from 'react-i18next';
import chart from '@/assets/imgs/chart.png';
import vehicle from '@/assets/imgs/vehicle.png';
import small_vehicle from '@/assets/imgs/small_vehicle.png';
import { VehicleLicense } from './vehicleLicense';
import { LayoutTitle } from '@/common/layoutTitle/layoutTitle';
// import { useLocation } from 'react-router';

export const DeliverymanLogDetails = () => {
  // const location = useLocation();
  // const {state}   = location;

  const { t } = useTranslation();
  return (
    <div className=''>
      <LayoutTitle title={t('احمد على حسن')} img='/src/assets/imgs/usa.png' />
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
              <AppBars title={t('delivermen_log.name')} data={t('أحمد حسني')} />
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
                  <div className='flex items-center justify-center gap-1.5 '>
                    <img src={small_vehicle} alt='small_vehicle' />
                    <h4 className='text-[#515151] text-[11px]'>
                      {t('delivermen_log.vehicle_type')}
                    </h4>
                  </div>
                  <span className='border border-[#EAEAEA] p-4 rounded-xl text-center'>
                    <img src={vehicle} alt='vehicle' className='mx-auto mb-2' />
                    <h5 className='text-[#4A4A4A] text-[9px]'> {t('delivermen_log.freeze_van')}</h5>
                  </span>
                </div>
                <div className='flex flex-col justify-center items-center gap-2 flex-wrap lg:flex-nowrap'>
                  <div className='flex items-center gap-1'>
                    <img src={small_vehicle} alt='small_vehicle' />
                    <h4 className='text-[#515151] text-[11px]'>
                      {t('delivermen_log.vehicle_model')}
                    </h4>
                  </div>
                  <span className='border border-[#EAEAEA] py-6 px-4 rounded-xl'>
                    <h5 className='text-[#4A4A4A] text-[9px]'> JAC 42 CBM </h5>
                  </span>
                </div>
                <div className='flex flex-col justify-center items-center gap-2 flex-wrap lg:flex-nowrap'>
                  <div className='flex items-center gap-1'>
                    <img src={small_vehicle} alt='small_vehicle' />
                    <h4 className='text-[#515151] text-[11px]'>
                      {t('delivermen_log.plate_number')}
                    </h4>
                  </div>
                  <span className='border border-[#EAEAEA] py-6 px-4 rounded-xl'>
                    <h5 className='text-[#4A4A4A] text-[9px]'> ا ب ه - 7529 </h5>
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

          {/* Card 3: Attachments */}
          <div className='bg-white relative rounded-2xl p-4 min-h-[6rem] shadow-md'>
            <AppLabels
              labelText={t('labels.attachment')}
              spaceX='0px'
              className='absolute top-0 right-0 rounded-tr-2xl w-fit h-fit rounded-bl-2xl py-[10px]'
              color='primary'
            />
            {/* Attachment content goes here */}
          </div>

          {/* Card 4: Address */}
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
            <div className='flex flex-col gap-4 pt-8 mt-[55px] h-auto 2xl:h-[633px]'>
              <AppCards title={t('delivermen_log.total_sales')} chart={chart} resultAsNumber='15' />
              <AppCards
                title={t('delivermen_log.number_of_requests')}
                chart={chart}
                resultAsNumber='15'
              />
              <AppCards
                title={t('delivermen_log.total_transferred_payments')}
                chart={chart}
                resultAsNumber='15'
              />
            </div>
          </div>
        </div>
        {/* END: Left Column */}
      </div>
    </div>
  );
};
