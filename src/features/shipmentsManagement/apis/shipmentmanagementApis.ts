import { appToast } from '@/lib/toast/toast';
import { appFetch } from '@/utils/appFetch.util';
import { t } from 'i18next';

export const getAllShipmentManagement = async (props: { pageParam: number | false }) => {
  return appFetch({
    url: '/order/get',
    apiOptions: {
      method: 'GET',
    },
    customErrorHandler: () => {
      appToast({
        type: 'error',
        message: t('ships_management.error_loading_shipments_management'),
      });
    },
    params: {
      page: +props.pageParam,
    },
  });
};
