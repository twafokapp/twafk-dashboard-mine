import { t } from 'i18next';
import type { ModalContent } from '../modalTypes';
import { AddDescription } from '@/common/modal/addDescription';

export function PrivacyPolicyModal(): ModalContent {
  return {
    title: <div>{t('settings_system.privacy_policy')}</div>,
    body: <AddDescription />,
  };
}
