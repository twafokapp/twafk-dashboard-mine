
import { cn } from '@/lib/twClassNames';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  const { t } = useTranslation();
  return (
    <input
      type={type}
      data-slot='input'
      className={cn(
        'w-[378px] h-[48px] bg-white rounded-[18px] ps-2 mb-[9px] text-[11px] text-[#1F263E]',
        className
      )}
      placeholder={t('placeholder')}
      {...props}
    />
  );
}

export { Input };
