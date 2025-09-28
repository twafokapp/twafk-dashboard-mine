import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { queryClient } from '@/lib/queryClient';
import { PRODUCTS_MANAGEMENT_KEY } from '@/constants/queryKeys';
import { appToast } from '@/lib/toast/toast';
import { updateProductApi } from './productApi';

export const useUpdateProduct = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: updateProductApi,
    onSuccess: res => {
      if (res.status === 1) {
        appToast({ type: 'success', message: 'Product updated successfully!' });
        queryClient.invalidateQueries({ queryKey: [PRODUCTS_MANAGEMENT_KEY] });
        navigate('/products');
      } else {
        appToast({
          type: 'error',
          message: res.message || 'An unknown error occurred',
        });
      }
    },
    onError: error => {
      appToast({
        type: 'error',
        message: error.message || 'Failed to update product',
      });
    },
  });
};
