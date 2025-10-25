import React from 'react';
import productImg from '@/assets/imgs/rectangle.png';

// Props for the internal LocationInfo component
interface LocationInfoProps {
  title: string;
  subtitle: string;
}

// Props for each step in the tracking data
interface TrackingStepProps {
  title: string;
  subtitle?: string;
  color?: string;
}

// Reusable component for displaying location text
const LocationInfo: React.FC<LocationInfoProps> = ({ title, subtitle }) => (
  <div className='flex flex-col gap-[5px]'>
    <h3 className='text-[#17211F] text-[10px] font-[400]'>{title}</h3>
    <h4 className='text-[#787878] text-[8px]'>{subtitle}</h4>
  </div>
);

export const ProductDetails: React.FC = () => {
  // Your tracking data arflex flex-col gap-[15px]ray
  const trackingData: TrackingStepProps[] = [
    { title: 'الرياض الدمام', subtitle: '13 شارع الحمد', color: '#FCD13D' },
    { title: 'التجمع الخامس , النرجس', subtitle: '13 شارع الحمد', color: '#FCD13D' },
  ];

  return (
    <div className='pt-[20px] pb-[25px] px-[25px] bg-white flex flex-col md:flex-row justify-between items-center lg:items-start  rounded-xl shadow-card gap-8'>
      {/* Left Side: Product Info */}
      <section className='flex gap-[5px] items-center flex-wrap lg:flex-nowrap justify-center lg:justify-start'>
        <img src={productImg} alt='Product' className='w-[108px] h-auto' />
        <div>
          <h3 className='text-[#787878] text-[10px] font-[700]'>Adidas - ZX 2K BOOST 2.0</h3>
          <h4 className=''>
            <span className='text-[#3AA3A3] text-[14px] font-[700]'>1800 جم</span>
            <span className='text-[#787878] text-[10px] font-[700]'> + 300 جم</span>
          </h4>
        </div>
      </section>

      {/* Right Side: Shipping Info & Progress Bar */}
      <section className='flex flex-col  gap-[15px]'>
        <div className='mr-7 '>
          {trackingData.map((step, index) => (
            <div key={index} className='flex gap-[13px] '>
              {/* Graphics Column: Dot and connecting line */}
              <div className='flex flex-col items-center pt-[3px] '>
                {/* The Dot */}
                <div
                  className='w-[12px] h-[12px]  flex items-center justify-center rounded-full'
                  style={{ backgroundColor: step.color }}
                >
                  <div className='w-[6px] h-[6px] bg-white rounded-full'></div>
                </div>

                {/* The Vertical Dashed Line (only if it's NOT the last item) */}
                {index < trackingData.length - 1 && (
                  <div
                    className='w-0.5 h-9 bg-repeat-y'
                    style={{
                      backgroundImage: 'linear-gradient(to bottom, #d1d5db 60%, transparent 40%)',
                      backgroundSize: '100% 10px',
                    }}
                  ></div>
                )}
              </div>

              {/* Info Column: Title and Subtitle */}
              {/* <div className='flex flex-col gap-[15px]'> */}
              <LocationInfo title={step.title} subtitle={step.subtitle || ''} />
              {/* </div> */}
            </div>
          ))}
        </div>

        {/* Shipping Date/Time Info */}
        <div className='flex gap-2 items-center'>
          <span className='text-[#17211F] font-[400] text-[10px]'>تم شحن الطلب. 15 Dec</span>
          <span className='text-[#787878] font-[400] text-[12px]'>12:25 صباحا</span>
        </div>
      </section>
    </div>
  );
};
