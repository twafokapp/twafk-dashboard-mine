import { t } from 'i18next';
import type { ModalContent, ModalType } from '../modalTypes';
import { AddInputs } from '@/common/modal/addInputs';

interface WeightUnitsAddModalProps {
  setModalType: (type: ModalType) => void;
}

export function WeightUnitsAddModal({ setModalType }: WeightUnitsAddModalProps): ModalContent {
  return {
    title: <div>{t('settings_system.weight_units')}</div>,
    body: <AddInputs setModalType={setModalType} type='unit' />,
  };
}
