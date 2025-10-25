import { logOut } from './../src/store/authSlice';
import { appToast } from './../src/lib/toast/toast';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const useLogoutHandler = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    try {
      dispatch(logOut());

      appToast({ type: 'success', message: 'تم تسجيل الخروج بنجاح!' });

      navigate('/sign-in');
    } catch (error) {
      appToast({
        type: 'error',
        message: error instanceof Error ? error.message : 'حدث خطأ أثناء تسجيل الخروج.',
      });
    }
  };

  return { handleLogout };
};
