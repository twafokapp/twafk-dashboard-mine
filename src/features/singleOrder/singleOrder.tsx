import { AppButton } from '@/common/appButton/appButton';
import { LayoutTitle } from '@/common/layoutTitle/layoutTitle';
import { useTranslation } from 'react-i18next';
import { ClientInvoice } from '../clientInvoice/clientInvoice';
import { useReactToPrint } from 'react-to-print';
import { useRef } from 'react';

export const SingleOrder = () => {
  const { t } = useTranslation();
  const invoiceRef = useRef<HTMLDivElement>(null);

  const reactToPrintFn = useReactToPrint({
    contentRef: invoiceRef,
  });

  const handleDownload = () => {};
  return (
    <>
      <LayoutTitle title={t('invoice.title')} />
      <div className='max-w-[700px] mx-auto'>
        <div className='flex sm:justify-end justify-center items-center gap-[8px] mb-[26px] mt-[70px] flex-wrap'>
          <AppButton
            onClick={reactToPrintFn}
            buttonText={t('buttons.print')}
            color='save'
            width='short'
          />
          <AppButton
            onClick={handleDownload}
            buttonText={t('buttons.download')}
            color='primary'
            width='short'
          />
        </div>
        <ClientInvoice ref={invoiceRef} />
      </div>
    </>
  );
};
