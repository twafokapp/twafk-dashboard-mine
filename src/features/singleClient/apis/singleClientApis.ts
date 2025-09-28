import { appToast } from '@/lib/toast/toast';
import { appFetch } from '@/utils/appFetch.util';
import { t } from 'i18next';

export const getClientById = async (clientId: string) => {
  return appFetch({
    url: `/user/single?user_id=${clientId}`,
    apiOptions: {
      method: 'GET',
    },
    customErrorHandler: () => {
      appToast({ type: 'error', message: t('single_client.error_loading_orders') });
    },
  });
};
