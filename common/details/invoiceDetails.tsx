import React from 'react';
import { useTranslation } from 'react-i18next';

// Props for the internal InvoiceRow component
interface InvoiceRowProps {
  label: string;
  value: string;
}

const InvoiceRow: React.FC<InvoiceRowProps> = ({ label, value }) => (
  <div className='flex justify-between items-center text-[12px]'>
    <dt className='font-bold text-[#17211F]'>{label}</dt>
    <dd className='text-[#787878]'>{value}</dd>
  </div>
);

export const InvoiceDetails: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className='shadow-card rounded-xl bg-white p-6 h-full'>
      <h2 className='text-center text-[16px] font-[300] mb-10'>{t('products_orders.invoice')}</h2>
      <dl className='flex flex-col gap-6'>
        <InvoiceRow label={'اسم العميل'} value={'أحمد حسن'} />
        <InvoiceRow label={'طريقة الدفع'} value={'أحمد حسن'} />
        <InvoiceRow label={'رقم الطلب'} value={'أحمد حسن'} />
        <InvoiceRow label={'المنتج'} value={'أحمد حسن'} />
      </dl>
    </section>
  );
};
