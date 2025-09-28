import { AppCards } from '@/common/appCard/appCards';
import PositiveChart from '@/assets/imgs/PositiveChart.svg';
import NegativeChart from '@/assets/imgs/NegativeChart.svg';
import { useTranslation } from 'react-i18next';

export const Homepage = () => {
  const { t } = useTranslation();
  return (
    <section className='flex mt-[66px] ml-[32px]'>
      <div className='grid sm:grid-cols-1 xl:grid-cols-4 gap-5 ml-[123px] w-full'>
        <AppCards
          title={t('homepage.total_number_of_employees')}
          resultAsNumber='100'
          chart={PositiveChart}
        />
        <AppCards
          title={t('homepage.number_of_sold_products_today')}
          resultAsNumber='5'
          chart={PositiveChart}
        />
        <AppCards
          title={t('homepage.number_of_sold_products')}
          resultAsNumber='5'
          chart={NegativeChart}
        />
        <AppCards
          title={t('homepage.total_financial_payments')}
          resultAsNumber='5'
          chart={PositiveChart}
        />
        <AppCards
          title={t('homepage.total_added_products')}
          resultAsNumber='80'
          chart={PositiveChart}
        />
        <AppCards
          title={t('homepage.number_of_deliverymen')}
          resultAsNumber='20'
          chart={PositiveChart}
        />
        <AppCards
          title={t('homepage.number_of_deliverymen')}
          resultAsNumber='54'
          chart={PositiveChart}
        />
        <AppCards
          title={t('homepage.number_of_deliverymen')}
          resultAsNumber='5'
          chart={PositiveChart}
        />
      </div>
      <div className='w-[250px] bg-red-300'>hello</div>
    </section>
  );
};
