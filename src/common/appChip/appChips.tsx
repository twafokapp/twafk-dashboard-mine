import React from 'react';

export type Color = 'primary' | 'success' | 'warning' | 'error';
export type Space = 'normal' | 'nospace' | 'long';

interface ChipProps {
  color?: Color;
  space?: Space;
  chipText: React.ReactNode;
}

export const AppChip = ({ color = 'primary', space = 'normal', chipText }: ChipProps) => {
  const customStyles = {
    foreground: '',
    background: '',
    padding: '',
  };

  // Define colors based on variant
  if (color === 'primary') {
    customStyles.background = '#1E87F026';
    customStyles.foreground = '#1E87F0';
  } else if (color === 'success') {
    customStyles.background = '#01C0AA26';
    customStyles.foreground = '#01C0AA';
  } else if (color === 'warning') {
    customStyles.background = '#FFC24626';
    customStyles.foreground = '#FFC246';
  } else if (color === 'error') {
    customStyles.background = '#FF161226';
    customStyles.foreground = '#FF2D55';
  }

  // Define spacing based on space
  if (space === 'normal') {
    customStyles.padding = '10px';
  } else if (space === 'nospace') {
    customStyles.padding = '0';
  } else if (space === 'long') {
    customStyles.padding = '20px';
  }

  const styles: React.CSSProperties = {
    fontSize: '16px',
    borderRadius: '10px',
    display: 'inline-block',
    backgroundColor: customStyles.background,
    color: customStyles.foreground,
    padding: customStyles.padding,
  };
  return (
    <div style={styles}>
      <h3>{chipText}</h3>
    </div>
  );
};
