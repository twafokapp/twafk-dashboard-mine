import { t } from 'i18next';
import { AppButton } from '../appButton/appButton';

export const AddDescription = () => {
  return (
    <div className='flex gap-[20px] justify-center align-center w-full flex-col'>
      <textarea
        className="w-full bg-[#F3F3F3] rounded-[8px] min-h-[154px] font-400 font-['cairo'] text-[16px] px-[12px] py-[10px] appearance-none invalid:text-gray-400"
        required
        placeholder={t('inputs.write_here')}
      ></textarea>
      <AppButton color='save' className='flex items-center gap-2 w-full justify-center'>
        <span className='text-[16px] font-400 text-nowrap'>{t('buttons.save')}</span>
      </AppButton>
    </div>
  );
};
