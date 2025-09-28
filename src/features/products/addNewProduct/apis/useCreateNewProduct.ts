import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createNewProduct } from './createNewProduct';
import { PRODUCTS_KEY } from '@/constants/queryKeys';
import { appToast } from '@/lib/toast/toast';
import { t } from 'i18next';

export const useCreateProduct = () => {
  const queryClient = useQueryClient();

  const { mutate, mutateAsync, isPending, isSuccess, isError, error } = useMutation({
    mutationFn: createNewProduct,
    onSuccess: () => {
      appToast({
        type: 'success',
        message: t('products_management.product_created_successfully'),
      });

      queryClient.invalidateQueries({ queryKey: [PRODUCTS_KEY] });
    },
    onError: () => {
      appToast({
        type: 'error',
        message: t('products_management.error_creating_product'),
      });
    },
  });

  return {
    mutate,
    mutateAsync,
    isPending,
    isSuccess,
    isError,
    error,
  };
};
