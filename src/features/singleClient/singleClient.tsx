import { MyTable } from '@/common/table/table.content';
import { useLocation, useNavigate } from 'react-router';
import CLIENT_ORDERS_MOCK_DATA from './CLIENT_ORDERS_MOCK_DATA.json';
import { useOrdersColumns } from './columns';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { useTranslation } from 'react-i18next';
import { ChevronLeft } from 'lucide-react';
import { SearchBar } from '@/common/search';
import { useState } from 'react';
// import { useDebounce } from '@/hooks/useDebounce';

export const SingleClient = () => {
  const location = useLocation();
  const client = location.state || {};
  const ordersColumns = useOrdersColumns();
  const [searchQuery, setSearchQuery] = useState('');
  // const debouncedSearchQuery = useDebounce(searchQuery, 500); // 500ms delay

  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const isArabic = i18n.language === 'ar';

  return (
    <>
      <div className='mb-[12px]'>
        <div className='flex justify-between mt-[42px] gap-5 flex-wrap mb-[25px]'>
          <div className='flex gap-5 items-center'>
            <Avatar className='w-12 h-12'>
              <AvatarImage
                src={client?.image || 'https://github.com/shadcn.png'}
                alt={client?.name}
              />
            </Avatar>
            <h1 className='font-light text-[25px] text-nowrap'>{client?.name || '...'}</h1>
          </div>
          <button
            className='flex items-center gap-[13px] cursor-pointer'
            onClick={() => navigate(-1)}
          >
            <span className='text-[20px] font-[400]'>{t('buttons.back')}</span>
            <span>
              <ChevronLeft
                color='#292D32'
                size={30}
                className={`${isArabic ? 'rotate-0' : 'rotate-180'}`}
              />
            </span>
          </button>
        </div>
        <SearchBar
          placeholder={t('products_management.search')}
          query={searchQuery}
          onQueryChange={setSearchQuery}
        />
      </div>
      <MyTable data={CLIENT_ORDERS_MOCK_DATA as []} columns={ordersColumns as []} />
    </>
  );
};
