import { AddDescription } from '@/common/modal/addDescription';
import { t } from 'i18next';
import type { ModalContent } from '../modalTypes';

export function AppDescriptionModal(): ModalContent {
  return {
    title: <div>{t('settings_system.app_description')}</div>,
    body: <AddDescription />,
  };
}
