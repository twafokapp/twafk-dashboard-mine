import { appFetch } from '@/utils/appFetch.util';
import type { SignInFormValues } from '../signIn';

export const signInApi = async (data: SignInFormValues) => {
  return appFetch({
    url: '/auth/login',
    apiOptions: {
      method: 'POST',
      data,
    },
  });
};
