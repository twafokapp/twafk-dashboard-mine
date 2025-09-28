import { appToast } from '@/lib/toast/toast';
import { appFetch } from '@/utils/appFetch.util';
import { t } from 'i18next';

interface UpdateProductProps {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
}

export const updateProductApi = async (productData: UpdateProductProps) => {
  return appFetch({
    url: '/product/update',
    apiOptions: {
      method: 'PUT',
      data: productData,
    },
    customErrorHandler: () => {
      appToast({
        type: 'error',
        message: t('products_management.error_updating_product'),
      });
    },
  });
};
