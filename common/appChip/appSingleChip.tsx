import React from 'react';

export type Color = 'primary' | 'primary-light';

interface ChipProps {
  color?: Color;
  text: string;
}

export const AppSingleChip = ({ color = 'primary',text }: ChipProps) => {

  const customStyles = {
    foreground: '',
    background: '',
    padding: '',
  };

  // Define colors based on variant
  if (color === 'primary') {
    customStyles.background = "#2D4484";
    customStyles.foreground = '#fff';
  } else if (color === 'primary-light') {
    customStyles.background = '#E3F5FF';
    customStyles.foreground = '#000';
  }


  const styles: React.CSSProperties = {
    fontSize: "14px",
    borderRadius: "9999px", // شكل بيضاوي مثل Chips العادية
    display: "inline-block",
    backgroundColor: customStyles.background,
    color: customStyles.foreground,
    padding: "6px 14px",
    fontWeight: 500,
    lineHeight: 1,
    cursor: "default",
    userSelect: "none",
  };
  return (
    <div style={styles}>
      <h3>{text}</h3>
    </div>
  );
};
