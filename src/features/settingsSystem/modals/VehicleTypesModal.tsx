import { t } from 'i18next';
import { Add } from 'iconsax-react';
import type { ModalContent, ModalType } from '../modalTypes';
import { AppButton } from '@/common/appButton/appButton';

interface VehicleTypesModalProps {
  setModalType: (type: ModalType) => void;
}

export function VehicleTypesModal({ setModalType }: VehicleTypesModalProps): ModalContent {
  return {
    title: <div>{t('settings_system.vehicle_types')}</div>,
    body: (
      <AppButton
        color='primary'
        className='flex items-center gap-2 w-full justify-center'
        onClick={() => setModalType('vehicle_types_add')}
      >
        <Add size='24' />
        <span className='text-[16px] font-400 text-nowrap'>{t('buttons.add_new_type')}</span>
      </AppButton>
    ),
  };
}
