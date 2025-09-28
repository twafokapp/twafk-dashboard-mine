import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { appToast } from '@/lib/toast/toast';
import { CATEGORIES_KEY } from '@/constants/queryKeys';
import { updateCategoryApi } from './updateCategory';

// React Query Hook
export const useUpdateCategory = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: updateCategoryApi,
    onSuccess: res => {
      if (res.status === 1) {
        appToast({ type: 'success', message: 'Category updated successfully!' });
        queryClient.invalidateQueries({ queryKey: [CATEGORIES_KEY] });
        navigate('/categories');
      } else {
        appToast({ type: 'error', message: res.message || 'Failed to update category' });
      }
    },
    onError: error => {
      appToast({ type: 'error', message: error.message || 'An error occurred' });
    },
  });
};
