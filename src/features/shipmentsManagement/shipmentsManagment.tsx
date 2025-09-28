import { MyTable } from '@/common/table/table.content';
import SHIPMENTSS_MANAGEMENT_MOCK_DATA from './SHIPMENTS_MANAGEMENT_MOCK_DATA.json';
import { UseShipmentsManagmentColumns } from './columns';
import { useTranslation } from 'react-i18next';
import { SearchBar } from '@/common/search';
import { LayoutTitle } from '@/common/layoutTitle/layoutTitle';
import type { ColumnDef } from '@tanstack/react-table';
import { useGetShipments } from './apis/useGetShipments';
import { Spinner } from '@/common/loaders/spinner';
import { useNavigate } from 'react-router';

type ShipmentType = (typeof SHIPMENTSS_MANAGEMENT_MOCK_DATA)[0];

export const ShipsManagement = () => {
  const columns = UseShipmentsManagmentColumns();
  const { t } = useTranslation();
  const { isPending, ref, isFetchingNextPage, data } = useGetShipments();
  const navigate = useNavigate();
  const handleRowClick = (row: ShipmentType) => {
    navigate(`/shipment-management/${row.ship_number}`, {
      state: row,
    });
  };

  return (
    <>
      <LayoutTitle title={t('ships_management.table_header')} />
      <div className='mt-[40px] mb-[10px]'>
        <SearchBar />
      </div>
      <MyTable<ShipmentType>
        data={data?.pages.flat() ?? []}
        columns={columns as ColumnDef<ShipmentType>[]}
        isLoading={isPending}
        onRowClick={handleRowClick}
        paginationRef={ref}
      />
      {isFetchingNextPage && <Spinner />}
    </>
  );
};
