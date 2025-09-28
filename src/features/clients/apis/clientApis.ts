import { appToast } from '@/lib/toast/toast';
import { appFetch } from '@/utils/appFetch.util';
import { t } from 'i18next';
import type { TClient } from '../clients.types';
import type { ApiResponse } from '@/types/types';

export const getAllClients = async (props: {
  pageParam: number | false;
  search?: string;
}): Promise<ApiResponse<{ data: TClient[] }>> => {
  return appFetch({
    url: '/user/get',
    apiOptions: {
      method: 'GET',
    },
    customErrorHandler: () => {
      appToast({ type: 'error', message: t('clients.error_loading_clients') });
    },
    params: {
      page: +props.pageParam,
      // Conditionally add the search parameter to the request if it exists
      ...(props.search && { search_text: props.search }),
    },
  });
};
