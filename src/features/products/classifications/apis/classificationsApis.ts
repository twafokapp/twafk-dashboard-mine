import { appToast } from '@/lib/toast/toast';
import { appFetch } from '@/utils/appFetch.util';
import { t } from 'i18next';

export const getAllCalssifications = async (props: { pageParam: number | false }) => {
  return appFetch({
    url: '/product/get',
    apiOptions: {
      method: 'GET',
    },
    customErrorHandler: () => {
      appToast({
        type: 'error',
        message: t('classification_management.error_loading_classifications'),
      });
    },
    params: {
      page: +props.pageParam,
    },
  });
};
