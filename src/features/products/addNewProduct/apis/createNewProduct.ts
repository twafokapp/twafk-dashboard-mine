import { appToast } from '@/lib/toast/toast';
import { appFetch } from '@/utils/appFetch.util';
import { t } from 'i18next';

interface CreateProductProps {
  name: string;
  description: string;
  price: number;
  quantity: number;
}

export const createNewProduct = async (productData: CreateProductProps) => {
  return appFetch({
    url: '/product/create',
    apiOptions: {
      method: 'POST',
      data: productData,
    },
    customErrorHandler: () => {
      appToast({
        type: 'error',
        message: t('products_management.error_creating_product'),
      });
    },
  });
};
