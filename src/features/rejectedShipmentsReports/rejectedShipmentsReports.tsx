import { MyTable } from '@/common/table/table.content';
import REJECTED_REPORTS_MOCK_DATA from './REJECTED_REPORTS_MOCK_DATA.json';
import { useShipmentsColumns } from '../../common/shipmentReports/columns';

export const RejectedShipmentsReports = () => {
  const columns = useShipmentsColumns();
  return (
      <MyTable data={REJECTED_REPORTS_MOCK_DATA as []} columns={columns} />
  );
};
