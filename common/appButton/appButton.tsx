import React, { type HTMLProps } from 'react';

const styleConfig = {
  base: {
    borderRadius: '12px',
    fontWeight: 300,
    cursor: 'pointer',
    border: '3px solid transparent',
  },
  color: {
    primary: { color: '#fff', background: '#01C0AA' },
    secondary: { color: '#fff', background: '#34C759' },
    error: { color: '#fff', background: '#F64E4B' },
    save: { color: '#fff', background: '#3984E3' },
    edit: { color: '#fff', background: '#1F263E' },
  },
  space: {
    xsmall: { padding: '5px 10px' },
    small: { padding: '4.5px 61.5px' },
    normal: { padding: '5px 15px' },
    long: { padding: '10px 40px' },
    longer: { padding: '10px 60px' },
  },
  width: {
    short: { width: '101px' },
    long: { width: '305px' },
    longer: { width: '620px' },
  },
  height: {
    xsmall: { height: 'auto' },
    small: { height: '24px' },
    normal: { height: '40px' },
  },
  fontSize: {
    small: { fontSize: '12px' },
    normal: { fontSize: '16px' },
  },
};

export interface AppButtonProps
  extends Omit<HTMLProps<HTMLButtonElement>, 'type'> {
  variant?: 'contained' | 'outlined' | 'text';
  color?: keyof typeof styleConfig.color;
  space?: keyof typeof styleConfig.space;
  width?: keyof typeof styleConfig.width;
  height?: keyof typeof styleConfig.height;
  fontSize?: 'small'|'normal';
  buttonText?: React.ReactNode;
}

export const AppButton = ({
  variant = 'contained',
  color = 'primary',
  space = 'normal',
  width ,
  height = 'normal',
  fontSize = 'normal',
  buttonText,
  children,
  ...props
}: AppButtonProps) => {
  const colorStyles = styleConfig.color[color];
  const spaceStyles = space ? styleConfig.space[space] : {};
  const widthStyles = width ? styleConfig.width[width] : {};
  const heightStyles = height ? styleConfig.height[height] : {};
  const fontSizeStyles = styleConfig.fontSize[fontSize];

  const styles: React.CSSProperties = {
    ...styleConfig.base,
    ...spaceStyles,
    ...widthStyles,
    ...heightStyles,
    ...fontSizeStyles,
  };

  // Variant-specific styling
  if (variant === 'contained') {
    styles.color = colorStyles.color;
    styles.backgroundColor = colorStyles.background;
  } else if (variant === 'outlined') {
    styles.color = colorStyles.background;
    styles.backgroundColor = 'transparent';
    styles.border = `3px solid ${colorStyles.background}`;
  } else if (variant === 'text') {
    styles.color = colorStyles.background;
    styles.backgroundColor = 'transparent';
    styles.border = 'none';
  }

  return (
    <button {...props} style={styles}>
      {buttonText && <span>{buttonText}</span>}
      {children}
    </button>
  );
};
