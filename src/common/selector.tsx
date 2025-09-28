import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react'; // Using lucide-react for the icon

const MONTH_KEYS = [
  'january',
  'february',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december',
];

export const MonthSelector = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  const currentMonthKey = MONTH_KEYS[new Date().getMonth()];
  const [selectedMonth, setSelectedMonth] = useState<string>(currentMonthKey);

  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMonth(event.target.value);
  };

  return (
    <div className='relative '>
      <select
        value={selectedMonth}
        onChange={handleMonthChange}
        className=' w-[144px] text-nowrap h-[37px] px-4 py-2 text-[16px] font-oxygen font-300 bg-white rounded-lg appearance-none cursor-pointer shadow-sm focus:outline-none'
        dir={isArabic ? 'rtl' : 'ltr'}
      >
        {MONTH_KEYS.map(monthKey => (
          <option key={monthKey} value={monthKey}>
            {t(`months.${monthKey}`)}
          </option>
        ))}
      </select>

      <div className='absolute inset-0 flex items-center justify-between w-[144px] h-full px-4 bg-white border border-[#E3E3E3] rounded-lg cursor-pointer pointer-events-none text-[11px] font-[oxygen] font-light '>
        <span className={`text-lg ${isArabic ? 'order-first' : 'order-last'}`}>
          {t(`months.${selectedMonth}`)}
        </span>
        <ChevronDown
          className={`text-gray-600 ${isArabic ? 'order-last' : 'order-last'}`}
          size={24}
        />
      </div>
    </div>
  );
};
