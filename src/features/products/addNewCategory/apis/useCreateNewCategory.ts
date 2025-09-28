import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { appToast } from '@/lib/toast/toast';
import { createCategoryApi } from './createNewCategory';
import { CATEGORIES_KEY } from '@/constants/queryKeys';

export const useCreateCategory = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: createCategoryApi,
    onSuccess: res => {
      if (res.status === 1) {
        appToast({ type: 'success', message: 'Category created successfully!' });
        queryClient.invalidateQueries({ queryKey: [CATEGORIES_KEY] });
        navigate('/categories');
      } else {
        appToast({ type: 'error', message: res.message || 'Failed to create category' });
      }
    },
    onError: error => {
      appToast({ type: 'error', message: error.message || 'An error occurred' });
    },
  });
};
