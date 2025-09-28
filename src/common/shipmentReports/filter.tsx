import { CalendarDays, ChevronDown, Printer, Truck, UserRound } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const FilterDropdown = ({ placeholder, icon }: { placeholder: string; icon?: React.ReactNode }) => {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  return (
    <div className='relative flex-1'>
      <div
        className={`absolute inset-y-0 ${isArabic ? 'right-3' : 'left-3'} flex items-center pointer-events-none`}
      >
        {icon}
      </div>
      <select
        className={`w-full h-[40px] bg-white border-none rounded-[16px] shadow-md appearance-none ${isArabic ? 'text-right pr-10' : 'text-left pl-10'} focus:outline-gray-500 text-[12px] text-[#AAA7A7] font-[Inter] font-[400] text-nowrap min-w-[150px]`}
      >
        <option>{placeholder}</option>
      </select>
      <div
        className={`absolute inset-y-0 ${isArabic ? 'left-3' : 'right-3'} flex items-center pointer-events-none`}
      >
        <ChevronDown size={20} className='text-gray-400' />
      </div>
    </div>
  );
};

const FilterInput = ({ placeholder, icon }: { placeholder: string; icon: React.ReactNode }) => {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  return (
    <div className='relative flex-1'>
      <div
        className={`absolute inset-y-0 ${isArabic ? 'right-3' : 'left-3'} flex items-center pointer-events-none`}
      >
        {icon}
      </div>
      <input
        type='text'
        placeholder={placeholder}
        className={`w-full h-[40px] bg-white border-none shadow-md rounded-[16px] ${isArabic ? 'text-right pr-10' : 'text-left pl-10'} focus:outline-gray-500 text-[12px] text-[#AAA7A7] font-[Inter] font-[400] text-nowrap min-w-[150px]`}
      />
    </div>
  );
};

const ActionBar = () => {
  const { t } = useTranslation();
  return (
    <div className='flex items-center gap-[12px] mb-[10px] flex-wrap text-nowrap w-full'>
      <FilterInput
        placeholder={t('shipments_reports.client_name')}
        icon={<UserRound size={20} className='text-gray-400' />}
      />
      <FilterInput
        placeholder={t('shipments_reports.date')}
        icon={<CalendarDays size={20} className='text-gray-400' />}
      />
      <FilterDropdown
        placeholder={t('shipments_reports.shipment_status')}
        icon={<Truck size={20} className='text-gray-400' />}
      />
      <FilterDropdown placeholder={t('shipments_reports.shipment_type')} />
      <button className='flex items-center gap-2 px-6 py-3 bg-[#3984E3] text-white rounded-[16px] h-[40px] text-[12px] font-[Inter] font-[400] text-nowrap cursor-pointer hover:bg-[#0d6efd] shadow-md'>
        <Printer size={20} />
        <span>{t('buttons.print')}</span>
      </button>
    </div>
  );
};

export { ActionBar, FilterDropdown, FilterInput };
