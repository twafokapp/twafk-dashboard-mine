import { MyTable } from '@/common/table/table.content';
import PRODUCT_REPORTS_MOCK_DATA from './PRODUCT_REPORTS_MOCK_DATA.json';
import { UseProductMenColumns } from './columns';
import { useTranslation } from 'react-i18next';
import { SearchBar } from '@/common/input';
import { IndeterminateCheckbox } from '@/common/checkbox';
import { LayoutTitle } from '@/common/layoutTitle/layoutTitle';

export const ProductsReports = () => {
  const { t } = useTranslation();
  const columns = UseProductMenColumns();
  return (
    <div>
      <LayoutTitle title={t('products_reports.title')} />
      <div className='mt-[40px] mb-[10px] flex justify-between flex-wrap gap-5'>
        <SearchBar />
        <span className='flex items-center gap-2'>
          <IndeterminateCheckbox />
          <span className='text-[20px] font-[Almarai] font-[300] '>
            {t('products_reports.most_sold_products')}
          </span>
        </span>
      </div>
      <MyTable data={PRODUCT_REPORTS_MOCK_DATA as []} columns={columns as []} />
    </div>
  );
};
