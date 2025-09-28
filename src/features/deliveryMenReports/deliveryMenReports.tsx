import { SearchBar } from '@/common/input';
import { MyTable } from '@/common/table/table.content';
import { useTranslation } from 'react-i18next';
import DELIVERYMEN_REPORTS_MOCK_DATA from './DELIVERYMEN_REPORTS_MOCK_DATA.json';
import { UseDeilveryMenColumns } from './columns';
import { LayoutTitle } from '@/common/layoutTitle/layoutTitle';

export const DeliveryMenReports = () => {
  const { t } = useTranslation();
  const columns = UseDeilveryMenColumns();
  return (
    <div>
      <LayoutTitle
        title={t('deliverymen_reports.title')}
      />
      <div className='mt-[40px] mb-[10px] flex justify-between'>
        <SearchBar />
      </div>
      <MyTable data={DELIVERYMEN_REPORTS_MOCK_DATA as []} columns={columns as []} />
    </div>
  );
};
