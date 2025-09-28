import { LayoutTitle } from '@/common/layoutTitle/layoutTitle';
import { t } from 'i18next';
import { AppTabs } from '@/common/appTab/appTabs';
import { useNavigate, useSearchParams } from 'react-router';
import { SearchBar } from '@/common/search';
import { AppButton } from '@/common/appButton/appButton';
import { ProductsManagement } from './productsManagement/ProductsManagement';
import { ProductsClassifications } from './classifications/Classifications';

export const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  type HandleTabChange = (newTab: string) => void;

  const handleTabChange: HandleTabChange = newTab => {
    setSearchParams({ tab: newTab });
  };
  const navigate = useNavigate();
  const tab = searchParams.get('tab') || 'one';
  return (
    <div>
      <LayoutTitle title={t('products_management.table_header')} />
      <div className='flex justify-between mt-[40px] mb-[10px] flex-wrap gap-5'>
        <div className='flex justify-between gap-10 text-[16px] sm:text-[20px] font-medium font-300 text-black  '>
          <AppTabs
            className={`pb-[10px] cursor-pointer ${tab === 'one' && 'border-b-2 border-soft-teal '}`}
            tabText={t('products_management.products')}
            count={6}
            countColor='green'
            handleTabChange={handleTabChange}
            selectedComponent='one'
          />
          <AppTabs
            className={`pb-[10px] cursor-pointer ${tab === 'two' && 'border-b-2 border-soft-teal'}`}
            tabText={t('products_management.classifications')}
            count={5}
            countColor='green'
            handleTabChange={handleTabChange}
            selectedComponent='two'
          />
        </div>
        <div className='flex items-center gap-[13px]'>
          <AppButton
            onClick={() => {
              if (tab === 'one') {
                navigate('/products/add-new-product');
              } else if (tab === 'two') {
                navigate('/products/add-new-category');
              }
            }}
          >
            {t('products_management.add_new_product')}
          </AppButton>
          <SearchBar placeholder={t('placeholder')} />
        </div>
      </div>
      {tab === 'one' && <ProductsManagement />}
      {tab === 'two' && <ProductsClassifications />}
    </div>
  );
};
