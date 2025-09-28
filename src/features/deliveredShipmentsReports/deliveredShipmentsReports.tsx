import { MyTable } from '@/common/table/table.content';
import DELIVERED_REPORTS_MOCK_DATA from './DELIVERED_REPORTS_MOCK_DATA.json';
import { useShipmentsColumns } from '../../common/shipmentReports/columns';

export const DeliveredShipmentsReports = () => {
  const columns = useShipmentsColumns();
  return (
      <MyTable data={DELIVERED_REPORTS_MOCK_DATA as []} columns={columns} />
  );
};
