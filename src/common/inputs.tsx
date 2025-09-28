import React from 'react';
import { ChevronDown, CircleDollarSign } from 'lucide-react';

export type IFormData = {
  productName: string;
  category: string;
  quantity: string;
  deliveryLocation: string;
  productPrice: string;
  productPriceCurrency: string;
  shippingPrice: string;
  shippingPriceCurrency: string;
  transferRequest: string;
  deliverTo: string;
};

interface InputWithIconProps {
  icon?: React.ReactNode;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: keyof IFormData;
}

interface SelectWithIconProps {
  icon?: React.ReactNode;
  placeholder?: string;
  options?: { value: string; label: string }[];
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  name?: keyof IFormData;
  className?: string;
}

interface PriceInputWithCurrencyProps {
  placeholder?: string;
  priceName?: keyof IFormData;
  priceValue?: string;
  currencyName?: keyof IFormData;
  currencyValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export const InputWithIcon: React.FC<InputWithIconProps> = ({
  icon,
  placeholder,
  type = 'text',
  value,
  onChange,
  name,
  ...rest
}) => {
  return (
    <div className='relative text-[#CDCDCD] font-normal w-full max-w-[305px]'>
      <div className='absolute inset-y-0 start-0 flex items-center ps-[9.7px] pointer-events-none'>
        {icon}
      </div>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className='bg-white border-[0.69px] border-[#EAEAEA] text-[14px] rounded-[5.49px] w-full h-[41px] focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[1px] ps-[31px] pe-[10px] text-start'
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
};

export const SelectWithIcon: React.FC<SelectWithIconProps> = ({
  icon,
  placeholder,
  options,
  value,
  onChange,
  name,
  className = '',
}) => {
  return (
    <div className={`relative w-full max-w-[305px] ${className} font-normal text-[#CDCDCD]`}>
      <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
        {icon}
      </div>
      <ChevronDown className='absolute inset-y-0 end-0 my-auto me-[19px] pointer-events-none h-4 w-4' />
      <select
        name={name}
        value={value}
        onChange={onChange}
        className='h-[41px] w-full appearance-none rounded-[5.49px] border border-[#EAEAEA] text-[14px] bg-white ps-10 pe-[31px] text-start'
      >
        <option value='' disabled>
          {placeholder}
        </option>
        {options.map(opt => (
          <option key={opt.value} value={opt.value} className='text-black'>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export const PriceInputWithCurrency: React.FC<PriceInputWithCurrencyProps> = ({
  placeholder,
  priceName,
  priceValue,
  currencyName,
  currencyValue,
  onChange,
}) => {
  return (
    <div className='flex h-[41px] w-full max-w-[305px] items-center rounded-[5.49px] border-[0.69px] border-[#EAEAEA] bg-white font-normal text-[#CDCDCD] text-[14px]'>
      <div className='relative h-full flex-grow'>
        <input
          type='number'
          placeholder={placeholder}
          name={priceName}
          value={priceValue}
          onChange={onChange}
          className='h-full w-full rounded-s-[5.49px] border-0 bg-transparent px-4 placeholder:text-[#CDCDCD] focus-visible:ring-0 text-start'
        />
      </div>
      <div className='relative flex h-full items-center border-s-[0.69px] border-s-[#EAEAEA]'>
        <ChevronDown className='pointer-events-none absolute start-2 top-1/2 h-4 w-4 -translate-y-1/2' />
        <select
          name={currencyName}
          value={currencyValue}
          onChange={onChange}
          className='appearance-none border-0 bg-transparent pe-[30px] ps-[27px] text-center outline-none focus:ring-0'
        >
          <option value='sar'>SAR</option>
          <option value='usd'>USD</option>
          <option value='eur'>EUR</option>
        </select>
        <CircleDollarSign className='pointer-events-none absolute end-2 top-1/2 h-4 w-4 -translate-y-1/2' />
      </div>
    </div>
  );
};
