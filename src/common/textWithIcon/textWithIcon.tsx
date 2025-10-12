import { SidebarGroupLabel } from "@/components/ui/sidebar";
import type React from "react";

interface TextWithIconProps {
  text: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export const TextWithIcon = ({ text, icon: Icon }: TextWithIconProps) => {
  return (
    <SidebarGroupLabel className='text-black text-xs flex gap-2.5 '>
      <Icon />
      {text}
    </SidebarGroupLabel>
  );
};
