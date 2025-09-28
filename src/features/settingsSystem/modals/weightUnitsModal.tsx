// WeightUnitsModal.tsx
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { AppButton } from '@/common/appButton/appButton';
import { Add } from 'iconsax-react';
import { t } from 'i18next';
import { useState } from 'react';

export function WeightUnitsModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Trigger */}
      <AppButton onClick={() => setOpen(true)} color='primary'>
        {t('settings_system.weight_units')}
      </AppButton>

      {/* Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className='bg-white p-[40px] border-none w-full lg:w-[678px]'>
          <h2 className='mb-4'>{t('settings_system.weight_units')}</h2>
          <AppButton
            color='primary'
            className='flex items-center gap-2 w-full justify-center'
            onClick={() => {
              setOpen(false);
              // you can chain open of another modal here if you want
            }}
          >
            <Add size='24' />
            <span className='text-[16px] font-400'>{t('buttons.add_new_unit')}</span>
          </AppButton>
        </DialogContent>
      </Dialog>
    </>
  );
}
