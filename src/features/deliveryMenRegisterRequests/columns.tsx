import { createColumnHelper } from '@tanstack/react-table';
import { t } from 'i18next';
import type { DeliveryMenRegisterRequests } from './deliveryMenRegisterRequests.type';
import { AppButton } from '@/common/appButton/appButton';
import { useNavigate } from 'react-router';
import { GetChipValue } from './getChipValue';

const columnsHelper = createColumnHelper<DeliveryMenRegisterRequests>();

export const UseDeliveryMenRegisterRequestsColumns = () => {
  const navigate = useNavigate();

  return [
    columnsHelper.accessor('name', {
      cell: info => info.getValue(),
      header: () => (
        <span className='flex justify-center'>{t('delivermen_register_requests.name')}</span>
      ),
    }),

    columnsHelper.accessor('phone_number', {
      cell: info => info.getValue(),
      header: () => (
        <span className='flex justify-center'>
          {t('delivermen_register_requests.phone_number')}
        </span>
      ),
    }),

    columnsHelper.accessor('e_mail', {
      cell: info => info.getValue(),
      header: () => (
        <span className='flex justify-center'>{t('delivermen_register_requests.e_mail')}</span>
      ),
    }),

    columnsHelper.accessor('order_status', {
      cell: info => <GetChipValue state={info.getValue() as string} />,
      header: () => (
        <span className='flex justify-center '>
          {t('delivermen_register_requests.order_status')}
        </span>
      ),
    }),

    columnsHelper.accessor('personal_profile', {
      header: () => <span className='flex justify-center' />,
      cell: () => (
        <div className='flex justify-center'>
          <AppButton
            className='text-nowrap'
            buttonText={t('buttons.show_file')}
            onClick={() => navigate('/deliverymen/deliveryman-register-request-details')}
          />
        </div>
      ),
    }),
  ];
};
