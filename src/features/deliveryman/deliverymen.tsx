import { useTranslation } from 'react-i18next';
import { DeliveryMenLogs } from '../deliveryMenLogs/deliveryMenLogs';
import { DeliveryMenRegisterRequests } from '@/features/deliveryMenRegisterRequests/deliveryMenRegisterRequests';
import { useSearchParams } from 'react-router';
import { AppTabs } from '@/common/appTab/appTabs';
import { SearchBar } from '@/common/search';
import { LayoutTitle } from '@/common/layoutTitle/layoutTitle';
import { useGetDeliveryMen } from './apis/useGetDeliveryMen';

type HandleTabChange = (newTab: string) => void;
export const Deliverymen = () => {
  const { t } = useTranslation();

  const [searchParams, setSearchParams] = useSearchParams();
  const tab = searchParams.get('tab') || 'one';

  const handleTabChange: HandleTabChange = newTab => {
    setSearchParams({ tab: newTab });
  };

  const query = useGetDeliveryMen();

  return (
    <div>
      <LayoutTitle title={t('deliverymen_management.title')} />

      <div className='flex justify-between mt-[40px] mb-[10px] flex-wrap gap-5 '>
        <div className='flex justify-between gap-10 text-[16px] sm:text-[20px] font-medium font-300 text-black  '>
          <AppTabs
            className={`pb-[10px] cursor-pointer ${tab === 'one' && 'border-b-2 border-soft-teal '}`}
            tabText={t('deliverymen_management.deiverymen_log')}
            count={0}
            countColor='green'
            handleTabChange={handleTabChange}
            selectedComponent='one'
          />
          <AppTabs
            className={`pb-[10px] cursor-pointer ${tab === 'two' && 'border-b-2 border-soft-teal'}`}
            tabText={t('deliverymen_management.deliverymen_registration_requests')}
            count={5}
            countColor='green'
            handleTabChange={handleTabChange}
            selectedComponent='two'
          />
        </div>
        <SearchBar />
      </div>
      {tab === 'one' && <DeliveryMenLogs query={query} />}
      {tab === 'two' && <DeliveryMenRegisterRequests query={query} />}
    </div>
  );
};
