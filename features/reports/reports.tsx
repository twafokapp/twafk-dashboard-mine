import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Box, People, Profile2User, Truck } from 'iconsax-react';
import { LayoutTitle } from '@/common/layoutTitle/layoutTitle';

export const Reports = () => {
  const { t } = useTranslation();
  const subReportsPages = [
    {
      id: 1,
      title: t('reports.clients'),
      link: '/reports/clients_reports',
      icon: <People color='#01C0AA' size={40} />,
    },
    {
      id: 2,
      title: t('reports.deliverymen'),
      link: '/reports/deliverymen_reports',
      icon: <Profile2User color='#01C0AA' size={40} />,
    },
    {
      id: 3,
      title: t('reports.products'),
      link: '/reports/products_reports',
      icon: <Box color='#01C0AA' size={40} />,
    },
    {
      id: 4,
      title: t('reports.shipments'),
      link: '/reports/shipments_reports',
      icon: <Truck color='#01C0AA' size={40} />,
    },
  ];
  return (
    <div className='overflow-x-auto'>
      <LayoutTitle title={t('reports.title')} />
      <div className='flex gap-[1.31rem] flex-wrap pt-[66px] sm:justify-start justify-center'>
        {subReportsPages.map(report => (
          <Link
            key={report.id}
            to={report.link}
            className='bg-white rounded-xl text-black px-4 py-2 hover:bg-zinc-50 h-[8rem] w-[12.6rem] flex justify-center items-center text-[16px] font-[400] hover:scale-90    hover:shadow-md transition-all duration-300'
          >
            <div className='flex flex-col items-center gap-[15px]'>
              {report.icon}
              {report.title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
