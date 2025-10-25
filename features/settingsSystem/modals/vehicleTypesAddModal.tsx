import { t } from 'i18next';
import type { ModalContent, ModalType } from '../modalTypes';
import { AddInputs } from '@/common/modal/addInputs';

interface VehicleTypesAddModalProps {
  setModalType: (type: ModalType) => void;
}

export function VehicleTypesAddModal({ setModalType }: VehicleTypesAddModalProps): ModalContent {
  return {
    title: <div>{t('settings_system.vehicle_types')}</div>,
    body: <AddInputs setModalType={setModalType} type='vehicle' />,
  };
}
