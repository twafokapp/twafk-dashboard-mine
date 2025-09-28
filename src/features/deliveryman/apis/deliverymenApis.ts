import { appToast } from '@/lib/toast/toast';
import { appFetch } from '@/utils/appFetch.util';
import { t } from 'i18next';

export const getAllDeliverymen = async (props: { pageParam: number | false }) => {
  return appFetch({
    url: '/driver/get_all_drivers',
    apiOptions: {
      method: 'GET',
    },
    customErrorHandler: () => {
      appToast({ type: 'error', message: t('deliverymen_management.error_loading_deliverymen') });
    },
    params: {
      page: +props.pageParam,
    },
  });
};
