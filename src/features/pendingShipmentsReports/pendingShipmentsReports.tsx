import { MyTable } from '@/common/table/table.content';
import PENDING_REPORTS_MOCK_DATA from './PENDING_REPORTS_MOCK_DATA.json';
import { useShipmentsColumns } from '@/common/shipmentReports/columns';

export const PendingShipmentsReports = () => {
  const columns = useShipmentsColumns();
  return (
      <MyTable data={PENDING_REPORTS_MOCK_DATA as []} columns={columns} />
  );
};
