import { AppCards } from '@/common/appCard/appCards';
import { useTranslation } from 'react-i18next';

export const Homepage = () => {
  const { t } = useTranslation();
  return (
    <section className='flex mt-[66px] ml-[32px]'>
      <div className='grid sm:grid-cols-1 xl:grid-cols-3 2xl:grid-cols-4 gap-5 ml-[123px] min-w-[70%] overflow-auto'>
        <AppCards
          title={t('homepage.total_number_of_employees')}
          resultAsNumber='100'
        />
        <AppCards
          title={t('homepage.total_attendants_today')}
          resultAsNumber='5'
        />
        <AppCards
          title={t('homepage.late_attendants')}
          resultAsNumber='5'
        />
        <AppCards
          title={t('homepage.work_from_home')}
          resultAsNumber='5'
        />
        <AppCards
          title={t('homepage.number_of_male_employees')}
          resultAsNumber='80'
        />
        <AppCards
          title={t('homepage.number_of_female_employees')}
          resultAsNumber='20'
        />
        <AppCards
          title={t('homepage.total_tasks')}
          resultAsNumber='54'
        />
        <AppCards
          title={t('homepage.absents_today')}
          resultAsNumber='5'
        />
      </div>
      <div className='w-[250px] bg-red-300 '>hello</div>
    </section>
  );
};
