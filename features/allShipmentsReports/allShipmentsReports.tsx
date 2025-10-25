import { MyTable } from '@/common/table/table.content';

import SHIPMENTS_REPORTS_MOCK_DATA from './SHIPMENTS_REPORTS_MOCK_DATA.json';
import { useShipmentsColumns } from '@/common/shipmentReports/columns';

export const AllShipmentsReports = () => {
  const columns = useShipmentsColumns();
  return (
      <MyTable data={SHIPMENTS_REPORTS_MOCK_DATA as []} columns={columns} />
  );
};
