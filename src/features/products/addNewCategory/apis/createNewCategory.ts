import { appFetch } from '@/utils/appFetch.util';

export const createCategoryApi = async (formData: FormData) => {
  return appFetch({
    url: '/category/create',
    apiOptions: { method: 'POST', data: formData },
  });
};
