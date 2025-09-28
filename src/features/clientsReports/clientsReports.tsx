import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { NewClients } from '../newClients/newClients';
import { MostWantedClients } from '../mostWantedClients/mostWantedClients';
import { ExcutedShipments } from '../excutedShipments/excutedShipments';
import { OrderedProducts } from '../orderedProducts/orderedProducts';
import { SearchBar } from '@/common/input';
import { MonthSelector } from '@/common/selector';
import { LayoutTitle } from '@/common/layoutTitle/layoutTitle';

export const ClientsReports = () => {
  const { t } = useTranslation();
  type ComponentState = 'newClients' | 'mostWantedClients' | 'excutedShipments' | 'orderedProducts';

  const tables = [
    {
      id: 1,
      state: 'newClients' as ComponentState,
      title: t('clients_reports.new_clients'),
    },
    {
      id: 2,
      state: 'mostWantedClients' as ComponentState,
      title: t('clients_reports.most_wanted_clients'),
    },
    {
      id: 3,
      state: 'excutedShipments' as ComponentState,
      title: t('clients_reports.excuted_shipments'),
    },
    {
      id: 4,
      state: 'orderedProducts' as ComponentState,
      title: t('clients_reports.ordered_products'),
    },
  ];

  const [activeComponent, setActiveComponent] = useState<ComponentState>('newClients');

  return (
    <div>
      <LayoutTitle title={t('clients_reports.title')} />
      <div className='flex gap-[1.31rem] pt-[40px] text-nowrap flex-wrap items-center sm:justify-start justify-center'>
        {tables.map(report => {
          const isActive = activeComponent === report.state;

          return (
            <button
              key={report.id}
              onClick={() => setActiveComponent(report.state)}
              className={`rounded-xl px-4 py-2 h-[4.375rem] w-[12.5625rem] flex justify-center items-center text-[1.2rem] hover:shadow-md transition-all duration-300 cursor-pointer ${
                isActive
                  ? 'bg-[#01c0aa26] text-[#01c0aa] border-none'
                  : 'bg-white text-black border-none'
              }`}
            >
              {report.title}
            </button>
          );
        })}
      </div>
      <div className='pt-[37px] pb-[15px] flex justify-between gap-5 flex-wrap'>
        <SearchBar />
        {activeComponent === 'newClients' && <MonthSelector />}
      </div>

      {activeComponent === 'newClients' && <NewClients />}
      {activeComponent === 'mostWantedClients' && <MostWantedClients />}
      {activeComponent === 'excutedShipments' && <ExcutedShipments />}
      {activeComponent === 'orderedProducts' && <OrderedProducts />}
    </div>
  );
};
