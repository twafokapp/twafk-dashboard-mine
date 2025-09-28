import './styles.css';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/routes/layouts/appLayout/appSiderbar';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Navbar } from '@/routes/layouts/appLayout/navbar';
import usaFlag from '@/assets/imgs/usa.png';
import ksaFlag from '@/assets/imgs/ksa.png';
import userImage from '@/assets/imgs/license.png';
import { Outlet } from 'react-router';

export function AppLayout() {
  const { i18n } = useTranslation();
  // const [lang, setLang] = useState(i18n.language);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  // const changeLanguage = (lng: string) => {
  //   i18n.changeLanguage(lng);
  //   setLang(lng === 'en' ? 'en' : 'ar');
  //   document.dir = lng === 'ar' ? 'rtl' : 'ltr';
  //   setDropdownOpen(false); // Close dropdown after selection
  // };

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
      <AppSidebar />
      <section className='w-full font-cairo text-center'>
        <div className='shadow-main h-[64px] flex items-center justify-between gap-5'>
          <Navbar />

          {/* --- Left Side --- */}
          <div className='text-primary text-3xl font-bold m-auto'>Twafok</div>
          <div className='left-side-container ml-[83.5px] flex'>
              <div className='flex items-center'>
                <span className='text-white bg-primary-dark px-[8.5px] py-[6.5px] rounded-3xl relative z-2'>متبقي على الدوم</span>
                <div className='bg-primary-light pl-[4px] pr-8 py-2 rounded-3xl relative left-5 z-0'>
                  <span>10:00:00</span>
                  <span>ساعة</span>
                </div>
              </div>
              <div className='flex items-center'>
                <span className='text-white bg-primary-dark px-[8.5px] py-[6.5px] rounded-3xl relative z-2'>متبقي على الدوم</span>
                <div className='bg-primary-light pl-[4px] pr-8 py-2 rounded-3xl relative left-5 z-0'>
                  <span>10:00:00</span>
                  <span>ساعة</span>
                </div>
              </div>

          </div>
        </div>

        {/* content */}

        <div className='grid grid-cols-12 grid-rows-12 mr-[116px]'>
          <div className='col-start-1 col-end-13 row-start-1 row-end-13 '>
            <Outlet />
          </div>
        </div>
      </section>
    </SidebarProvider>
  );
}
