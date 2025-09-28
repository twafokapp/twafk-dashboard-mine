import { t } from 'i18next';
import { Input } from '@/components/ui/input';
import { AppButton } from '@/common/appButton/appButton';
import type { ModalContent } from '../modalTypes';

export function ContactNumbersModal(): ModalContent {
  return {
    title: <div>{t('settings_system.contact_numbers')}</div>,
    body: (
      <div className='flex gap-[20px] justify-center align-center w-full flex-col'>
        <div className='flex gap-[20px]'>
          <Input
            placeholder={t('inputs.text')}
            className="w-1/2 bg-[#F3F3F3] rounded-[8px] h-[40px] font-400 font-['cairo'] text-[16px] px-[12px]"
          />
          <Input
            placeholder={t('inputs.phone_number')}
            className="w-1/2 bg-[#F3F3F3] rounded-[8px] h-[40px] font-400 font-['cairo'] text-[16px] px-[12px]"
          />
        </div>
        <AppButton color='save' className='flex items-center gap-2 w-full justify-center'>
          <span className='text-[16px] font-400 text-nowrap'>{t('buttons.save')}</span>
        </AppButton>
      </div>
    ),
  };
}
