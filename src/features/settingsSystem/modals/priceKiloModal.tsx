import { t } from 'i18next';
import { ArrowDown2 } from 'iconsax-react';
import { Input } from '@/components/ui/input';
import type { ModalContent } from '../modalTypes';
import { AppButton } from '@/common/appButton/appButton';

export function PriceKiloModal(): ModalContent {
  const isArabic = localStorage.getItem('i18nextLng') === 'ar';

  return {
    title: <div>{t('settings_system.price_kilo')}</div>,
    body: (
      <div className='flex gap-[20px] justify-center align-center w-full flex-col'>
        <div className='flex gap-[20px]'>
          <Input
            placeholder={t('inputs.price')}
            className="w-1/2 bg-[#F3F3F3] rounded-[8px] h-[40px] font-400 font-['cairo'] text-[16px] px-[12px]"
          />
          <div className='relative w-1/2'>
            <select
              className="w-full bg-[#F3F3F3] rounded-[8px] h-[40px] font-400 font-['cairo'] text-[16px] px-[12px] appearance-none invalid:text-gray-400"
              required
            >
              <option value='' selected disabled>
                {t('settings_system.choose_currency')}
              </option>
              <option value='USD'>USD</option>
              <option value='EUR'>EUR</option>
              <option value='SAR'>SAR</option>
            </select>
            <ArrowDown2
              className={`absolute top-[50%] ${isArabic ? 'left-[16px]' : 'right-[16px]'} transform -translate-y-1/2`}
              size={20}
            />
          </div>
        </div>
        <AppButton color='save' className='flex items-center gap-2 w-full justify-center'>
          <span className='text-[16px] font-400 text-nowrap'>{t('buttons.save')}</span>
        </AppButton>
      </div>
    ),
  };
}
