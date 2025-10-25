import { t } from 'i18next';
import { useLocation, useNavigate } from 'react-router-dom';

interface TabProps {
  title: string;
  count: number;
  isActive: boolean;
  onClick: () => void;
}

const Tab: React.FC<TabProps> = ({ title, count, isActive, onClick }) => {
  return (
    <button onClick={onClick} className='relative cursor-pointer text-[16px] ' >
      <div className='flex items-center mb-[10px]'>
        <h1 className='text-[16px] sm:text-[20px] font-medium font-300 text-black'>{title}</h1>
        <span className='text-[13px] sm:text-[18px] mx-[10px] rounded-full w-[20px] h-[20px] font-300 flex items-center justify-center text-white bg-[#01C0AA]'>
          {count}
        </span>
      </div>
      {isActive && (
        <div className=' absolute bottom-0 left-0 w-full h-[2px] bg-[#01C0AA] rounded-full' />
      )}
    </button>
  );
};

// Main component that manages the tabs
export const Tabs: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const activeTab = location.pathname.includes('products-classifications')
    ? 'products-classifications'
    : 'products';

  const handleTabClick = (tabName: string) => {
    if (tabName === 'products') {
      navigate('/products/products-management');
    } else if (tabName === 'products-classifications') {
      navigate('/products/products-classifications');
    }
  };

  return (
    <div className='flex items-center gap-[18px]'>
      <Tab
        title={t('products_management.products')}
        count={8}
        isActive={activeTab === 'products'}
        onClick={() => handleTabClick('products')}
      />
      <Tab
        title={t('products_management.classifications')}
        count={5}
        isActive={activeTab === 'products-classifications'}
        onClick={() => handleTabClick('products-classifications')}
      />
    </div>
  );
};
