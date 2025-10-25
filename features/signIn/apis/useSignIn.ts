import { useMutation } from '@tanstack/react-query';
import { signInApi } from './signInApis';
import { setCredentials } from '@/store/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { appToast } from '@/lib/toast/toast';

interface LoginResponse {
  status: number;
  message: string;
  data: {
    id: number;
    name: string;
    email: string;
    image: string;
    token: string;
  };
}

export const useSignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: signInApi,
    onSuccess: (data: LoginResponse) => {
      if (data?.status === 1) {
        dispatch(
          setCredentials({
            user: {
              id: data?.data?.id,
              name: data?.data?.name,
              email: data?.data?.email,
            },
            token: data?.data?.token,
          })
        );

        appToast({ type: 'success', message: data?.message || 'تم تسجيل الدخول بنجاح!' });
        navigate('/');
      } else {
        appToast({ type: 'error', message: data?.message });
      }
    },
  });
};
