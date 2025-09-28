import axiosInstance from '@/lib/axios';
import type { PageParams } from '@/types/types';
import type { AxiosRequestConfig } from 'axios';

interface AppFetchProps {
  url: string;
  apiOptions: AxiosRequestConfig;
  customErrorHandler?: VoidFunction;
  params?: PageParams;
}

export const appFetch = async ({ url, apiOptions, customErrorHandler, params }: AppFetchProps) => {
  try {
    const response = await axiosInstance(url, {
      ...apiOptions,
      params,
    });
    const data = await response.data;
    return data;
  } catch (error) {
    if (customErrorHandler) {
      customErrorHandler();
    }
    throw error;
  }
};
