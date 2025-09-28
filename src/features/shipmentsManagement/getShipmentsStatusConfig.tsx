import { t } from 'i18next';
import { SHIPMENTS_STATUS } from '@/constants/status.constant';
import type { Color } from '@/common/appChip/appChips';

export const getShipmentsStatusConfig = (
  status: SHIPMENTS_STATUS
): { label: string; color: Color } => {
  switch (status) {
    case SHIPMENTS_STATUS.FAILURE:
      return { label: t('chips.Canceled'), color: 'error' };

    case SHIPMENTS_STATUS.PENDING:
      return { label: t('chips.under_processing'), color: 'warning' };

    case SHIPMENTS_STATUS.RETURNED:
      return { label: t('chips.returned'), color: 'primary' };

    case SHIPMENTS_STATUS.DELIVERED:
      return { label: t('chips.completed'), color: 'success' };

    default:
      return { label: t('chips.unknown'), color: 'primary' };
  }
};
