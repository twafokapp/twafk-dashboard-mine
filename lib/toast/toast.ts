import { toast as hotToast } from 'react-hot-toast';

type ToastType = 'success' | 'error' | 'loading';

export const appToast = ({ type, message }: { type: ToastType; message: string }) => {
  switch (type) {
    case 'success':
      hotToast.success(message);
      break;
    case 'error':
      hotToast.error(message);
      break;
    case 'loading':
      hotToast.loading(message);
      break;
    default:
      hotToast(message);
      break;
  }
};
