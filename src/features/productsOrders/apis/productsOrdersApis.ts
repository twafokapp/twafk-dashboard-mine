import { appToast } from '@/lib/toast/toast';
import { appFetch } from '@/utils/appFetch.util';
import { t } from 'i18next';

export const getAllProductsOrders = async (props: { pageParam: number | false }) => {
  return appFetch({
    url: '/product_order/get',
    apiOptions: {
      method: 'GET',
    },
    customErrorHandler: () => {
      appToast({ type: 'error', message: t('products_orders.error_loading_products_orders') });
    },
    params: {
      page: +props.pageParam,
    },
  });
};
