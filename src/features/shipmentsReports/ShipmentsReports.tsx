import { useState } from 'react';
import { StatusFilterButton } from '@/common/statusFilter/statusFilter';
import { AllShipmentsReports } from '../allShipmentsReports/allShipmentsReports';
import { DeliveredShipmentsReports } from '../deliveredShipmentsReports/deliveredShipmentsReports';
import { PendingShipmentsReports } from '../pendingShipmentsReports/pendingShipmentsReports';
import { RejectedShipmentsReports } from '../rejectedShipmentsReports/rejectedShipmentsReports';
import { ActionBar } from '@/common/shipmentReports/filter';
import { useTranslation } from 'react-i18next';
import { LayoutTitle } from '@/common/layoutTitle/layoutTitle';

export const ShipmentsReports = () => {
  const { t } = useTranslation();
  const [activeStatusId, setActiveStatusId] = useState('all');

  const STATUSES_DATA = [
    { id: 'all', label: t('shipments_reports.all_shipments'), count: 120, color: '#01C0AA26' },
    { id: 'pending', label: t('shipments_reports.pending'), count: 20, color: '#01C0AA26' },
    { id: 'delivered', label: t('shipments_reports.delivered'), count: 86, color: '#01C0AA26' },
    { id: 'returned', label: t('shipments_reports.rejected'), count: 14, color: '#01C0AA26' },
  ];

  const renderActiveComponent = () => {
    switch (activeStatusId) {
      case 'all':
        return <AllShipmentsReports />;
      case 'delivered':
        return <DeliveredShipmentsReports />;
      case 'pending':
        return <PendingShipmentsReports />;
      case 'returned':
        return <RejectedShipmentsReports />;
      default:
        return <h1>No Table Found</h1>;
    }
  };

  return (
    <div className=''>
      <LayoutTitle title={t('shipments_reports.title')} />

      <div className='flex justify-start items-center gap-[12px] mt-[40px] mb-[28px]  flex-wrap text-nowrap'>
        {STATUSES_DATA.map(status => (
          <StatusFilterButton
            key={status.id}
            status={status}
            isActive={activeStatusId === status.id}
            onClick={() => setActiveStatusId(status.id)}
          />
        ))}
      </div>

      {activeStatusId === 'all' && (
        <>
          <ActionBar />
          {renderActiveComponent()}
        </>
      )}
      {activeStatusId === 'delivered' && <div className='mt-[94px]'>{renderActiveComponent()}</div>}
      {activeStatusId === 'pending' && <div className='mt-[94px]'>{renderActiveComponent()}</div>}
      {activeStatusId === 'returned' && <div className='mt-[94px]'>{renderActiveComponent()}</div>}
    </div>
  );
};
