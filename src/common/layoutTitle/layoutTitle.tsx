import { ChevronLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

type LayoutTitleProps = {
  title: string;
  img?: string;
  onBackClick?: () => void;
};

export const LayoutTitle = ({ title, img, onBackClick }: LayoutTitleProps) => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  const navigate = useNavigate();

  const handleBackClick = () => {
    if (onBackClick) {
      onBackClick();
    } else {
      navigate(-1);
    }
  };

  return (
    <div className='flex justify-between mt-11 gap-5 flex-wrap'>
      <div className='flex items-center gap-5'>
        {img && (
          <img
            src={img}
            className='w-[3.18563rem] h-[3.18563rem] rounded-[3.1rem] shadow-card '
            alt={`${img}`}
          />
        )}
        <h1 className='font-light text-[25px] text-nowrap'>{title}</h1>
      </div>
      <button className='flex items-center gap-[13px] cursor-pointer ' onClick={handleBackClick}>
        <span className='text-[20px] font-[Almarai] font-[400]'>{t('buttons.back')}</span>
        <span>
          <ChevronLeft
            color='#292D32'
            size={30}
            className={`${isArabic ? 'rotate-0' : 'rotate-180'}`}
          />
        </span>
      </button>
    </div>
  );
};
