import { type HTMLProps } from 'react';

const labelStyleConfig = {
  base: 'absolute  px-6 py-1',
  color: {
    primary: 'bg-[#01C0AA] text-white',
    secondary: 'bg-[#ffc246] text-[#5D5443]',
  },
  fontSize: {
    small: 'text-xs',
    normal: 'text-base',
  },
  fontWeight: {
    '300': 'font-light',
    '700': 'font-bold',
  },
  placeTop: {
    none: 'top-0',
    '11px': 'top-3',
  },
  placeLeft: {
    none: 'left-0',
    '26px': 'left-6',
  },
  spaceX: {
    '50px': 'px-12',
    '0px': 'px-0',
  },
  rounded: 'rounded-xl',
};

export interface LabelProps extends Omit<HTMLProps<HTMLHeadingElement>, 'color'> {
  color?: 'primary' | 'secondary';
  fontSize?: 'small' | 'normal';
  fontWeight?: '300' | '700';
  placeTop?: 'none' | '11px';
  placeLeft?: 'none' | '26px';
  spaceX?: '50px' | '0px';
  labelText?: string;
  className?: string;
  rounded?: 'rounded-xl';
}

export const AppLabels = ({
  color = 'secondary',
  fontSize = 'normal',
  fontWeight = '300',
  placeTop = 'none',
  placeLeft = 'none',
  spaceX = '50px',
  labelText,
  className,
  ...props
}: LabelProps) => {
  const finalClassName = [
    labelStyleConfig.base,
    labelStyleConfig.color[color],
    labelStyleConfig.fontSize[fontSize],
    labelStyleConfig.fontWeight[fontWeight],
    labelStyleConfig.placeTop[placeTop],
    labelStyleConfig.placeLeft[placeLeft],
    labelStyleConfig.spaceX[spaceX],
    className,
  ].join(' ');

  return (
    <h4 {...props} className={finalClassName}>
      {labelText}
    </h4>
  );
};
