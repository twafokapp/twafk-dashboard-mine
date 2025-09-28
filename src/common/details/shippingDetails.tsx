import React from 'react';
import { useTranslation } from 'react-i18next';

// Define the type for the props of our internal TrackingStep component
interface TrackingStepProps {
  time: string;
  title: string;
  subtitle?: string;
  color?: string;
  item?: 0 | 1;
}

// A reusable component for each step in the timeline (defined locally)
const TrackingStep: React.FC<TrackingStepProps> = ({ time, title, subtitle, color, item }) => {
  const contentContainerClasses = `flex flex-col items-start gap-[5px] ${item === 0 ? 'ps-[15px]' : ''}`;

  return (
    <div className='flex gap-[8px]'>
      {/* Center: The Dot */}
      <div
        className='w-[14px] h-[14px] flex-shrink-0 flex items-center justify-center rounded-full'
        style={{ backgroundColor: color }}
      >
        <div className='w-[6px] h-[6px] rounded-full bg-white'></div>
      </div>

      {/* Right & Left Sides Wrapper */}
      <div className='flex flex-1 gap-[10px] items-center flex-wrap lg:flex-nowrap'>
        {/* Title and Subtitle Group */}
        <div className={contentContainerClasses}>
          <h4 className='font-400 text-[#17211F] text-[10px] text-nowrap'>{title}</h4>
          {subtitle && <p className='text-[#787878] text-[8px] text-nowrap'>{subtitle}</p>}
        </div>

        {/* Timestamp */}
        <div className='text-[#787878] text-[12px] text-nowrap'>
          {time && <h4 className=''>{time}</h4>}
        </div>
      </div>
    </div>
  );
};

export const ShippingDetails: React.FC = () => {
  const trackingData: TrackingStepProps[] = [
    { time: '', title: 'الرياض الدمام', subtitle: '13 شارع الحمد', color: '#01c0aa', item: 1 },
    { time: '12:25 صباحا', title: 'بدأ تحميل الشحنة 15 Dec', color: '#fcd13d', item: 0 },
    { time: '12:25 صباحا', title: 'بدأ التوصيل 15 Dec', color: '#bababa', item: 0 },
    { time: '12:25 صباحا', title: 'تسليم الشحنة 15 Dec', color: '#bababa', item: 0 },
    { time: '', title: 'الرياض الدمام', subtitle: '13 شارع الحمد', color: '#01c0aa', item: 1 }, // Changed to 1 for better visual hierarchy
  ];

  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  return (
    <div className='rounded-xl bg-white shadow-card px-[35px] pt-[43px] pb-[40px] relative'>
      {/* Yellow Status Button */}
      <div
        className={`absolute top-4 ${isArabic ? 'left-[33%] lg:left-6 ' : 'right-[33%] lg:right-6 '} bg-[#FFC246] text-[#5D5443] py-[5px] px-[55px] rounded-[10px] text-[10px] font-[400]`}
      >
        {t('products_orders.order_details.pending_shipments')}
      </div>

      {/* Timeline Container */}
      <div className='relative mt-5 lg:mt-0'>
        {/* The Vertical Dashed Line */}
        <div
          className={`absolute top-[3px] ${isArabic ? 'right-[6px]' : 'left-[6px]'} w-0.5 h-[calc(80%)] bg-repeat-y`}
          style={{
            backgroundImage: 'linear-gradient(to bottom, #d1d5db 60%, transparent 40%)',
            backgroundSize: '100% 10px',
          }}
        ></div>

        {/* Tracking Steps */}
        <div className='flex flex-col gap-[40px] relative z-10'>
          {trackingData.map((step, index) => (
            <TrackingStep
              key={index}
              title={step.title}
              time={step.time}
              subtitle={step.subtitle}
              color={step.color}
              item={step.item}
            />
          ))}
        </div>

        <p className='flex gap-[5px] mt-[10px] pr-[22px]'>
          <span className='font-[400] text-[#17211F] text-[10px]'> تم تأكيد شحن الطلب. 15 Dec</span>
          <span className='text-[#787878] text-[12px]'>12:25 صباحا</span>
        </p>
      </div>
    </div>
  );
};
