import { AddDescription } from '@/common/modal/addDescription';
import { t } from 'i18next';
import type { ModalContent } from '../modalTypes';

export function TermsAndConditionsModal(): ModalContent {
  return {
    title: <div>{t('settings_system.terms_and_conditions')}</div>,
    body: <AddDescription />,
  };
}
