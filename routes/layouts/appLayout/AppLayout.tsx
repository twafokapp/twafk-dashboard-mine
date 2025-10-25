import './styles.css';
import { SidebarProvider } from '@/components/ui/sidebar';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router';
import { SidePanel } from './sidePanel';
import { NewAppSidebar } from './newAppSiderbar';
import { AppDoubleChips } from '@/common/appChip/appDoubleChips';
import { Divide } from 'lucide-react';

export function AppLayout() {
    const hour = "ساعة"
    const dateNow  = new Date();

  const { i18n } = useTranslation();
  // const [lang, setLang] = useState(i18n.language);
  const [isDropdownOpen, setDropdownOpen] = useState(false);


  const dropdownRef = useRef<HTMLDivElement>(null);

  //  Add an effect to listen for outside clicks
  useEffect(() => {
    // Function to handle clicks
    const handleClickOutside = (event: MouseEvent) => {
      // If the ref is attached and the click is outside the referenced element
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false); // Close the dropdown
      }
    };

    // Add event listener when the dropdown is open
    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Cleanup: remove the event listener when the component unmounts or dropdown closes
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]); // Re-run this effect only when isDropdownOpen changes

  useMemo(() => {
    document.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  return (
    <SidebarProvider>

      <SidePanel />
      {/* <AppSidebar /> */}
      <NewAppSidebar />
      <section className='w-full font-cairo text-center bg-[#f6f6f6] '>
        <div className='bg-white relative z-10 shadow-main h-[64px] flex items-center justify-between gap-5'>
          {/* <Navbar /> */}

          {/* --- Left Side --- */}
          <div className='text-primary text-3xl font-bold m-auto'>Twafok</div>
          <div className='absolute left-0 ml-[83.5px] flex'>
              <div className='flex items-center'>
                <AppDoubleChips leftSide='التاريخ' rightSide={
                  <div className='flex gap-2'>
                  <span>{dateNow.toLocaleDateString("ar-IR-u-ca-islamic")}</span>
                  <span>{dateNow.toLocaleDateString("en-GB")}</span>
                </div>} />
                <AppDoubleChips leftSide='متبقي على الدوام' rightSide={`10:00:00 ${hour}`} />
              </div>
          </div>
        </div>

        {/* content */}

        <div className='grid grid-cols-12 grid-rows-12 mr-[180px] '>
          <div className='col-start-1 col-end-13 row-start-1 row-end-13 w-[80%] m-auto'>
            <Outlet />
          </div>
        </div>
      </section>
    </SidebarProvider>
  );
}
