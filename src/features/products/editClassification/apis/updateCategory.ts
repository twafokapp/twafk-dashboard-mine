import { appToast } from '@/lib/toast/toast';
import { appFetch } from '@/utils/appFetch.util';
import { t } from 'i18next';

export const updateCategoryApi = async (formData: FormData) => {
  return appFetch({
    url: '/category/update',
    apiOptions: { method: 'POST', data: formData },
    customErrorHandler: () => {
      appToast({ type: 'error', message: t('products_management.error_loading_products') });
    },
  });
};
