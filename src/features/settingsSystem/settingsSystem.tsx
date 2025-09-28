import setting_logo from '@/assets/imgs/setting_logo.png';
import { SettingsItem } from '@/common/settingsItem/SettingsItem';
import { useTranslation } from 'react-i18next';
import {
  ArrowLeft2,
  Subtitle,
  InfoCircle,
  UsdCoin,
  TruckFast,
  WeightMeter,
  Tag2,
  CallCalling,
} from 'iconsax-react';
import { useEffect, useRef, useState, type ChangeEvent } from 'react';
import { Modal } from '@/common/modal/modal';
import { AppButton } from '@/common/appButton/appButton';
import type { ModalType } from './modalTypes';

const settingsConfig = [
  {
    textKey: 'settings_system.vehicle_types',
    icon: <TruckFast color='#01C0AA' />,
    modalType: 'vehicle_types',
  },
  {
    textKey: 'settings_system.weight_units',
    icon: <WeightMeter color='#01C0AA' />,
    modalType: 'weight_units',
  },
  {
    textKey: 'settings_system.price_kilo',
    icon: <Tag2 color='#01C0AA' />,
    modalType: 'price_kilo',
  },
  {
    textKey: 'settings_system.currency',
    icon: <UsdCoin color='#01C0AA' />,
    modalType: 'currency',
  },
  {
    textKey: 'settings_system.app_description',
    icon: <Subtitle color='#01C0AA' />,
    modalType: 'app_description',
  },
  {
    textKey: 'settings_system.contact_numbers_and_customer_service',
    icon: <CallCalling color='#01C0AA' />,
    modalType: 'contact_numbers_and_customer_service',
  },
  {
    textKey: 'settings_system.terms_and_conditions',
    icon: <InfoCircle color='#01C0AA' />,
    modalType: 'terms_and_conditions',
  },
  {
    textKey: 'settings_system.privacy_policy',
    icon: <InfoCircle color='#01C0AA' />,
    modalType: 'privacy_policy',
  },
];

export const SettingsPage = () => {
  const { t } = useTranslation();
  const isArabic = localStorage.getItem('i18nextLng') === 'ar';

  const [activeModal, setActiveModal] = useState<ModalType | null>(null);

  // 1. State to hold the current logo URL
  const [logo, setLogo] = useState<string>(setting_logo);
  // 2. Ref to access the hidden file input element
  const fileInputRef = useRef<HTMLInputElement>(null);

  // 3. Handler for the "Change Logo" button click
  const handleChangeLogoClick = () => {
    fileInputRef.current?.click();
  };

  // 4. Handler for when a new file is selected
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Create a temporary URL for the new image and update the state
      setLogo(URL.createObjectURL(file));
    }
  };

  // Cleanup the object URL to prevent memory leaks
  useEffect(() => {
    return () => {
      if (logo.startsWith('blob:')) {
        URL.revokeObjectURL(logo);
      }
    };
  }, [logo]);

  return (
    <section className=''>
      {/* 5. Add the hidden file input */}
      <input
        type='file'
        ref={fileInputRef}
        onChange={handleFileChange}
        className='hidden'
        accept='image/png, image/jpeg, image/gif'
      />

      <div className='pt-[45px] flex flex-col justify-center items-center gap-[54px]'>
        <div className='flex flex-col items-center justify-center'>
          <div className='h-45 w-45 p-2.5 bg-white shadow-settings rounded-xl'>
            <img src={logo} alt='Settings Logo' />
          </div>
          <AppButton
            color='edit'
            height='normal'
            space='small'
            className='mt-[11px]'
            onClick={handleChangeLogoClick}
          >
            {t('settings_system.change_logo')}
          </AppButton>
        </div>

        <div className='flex flex-col gap-3 font-normal text-sm'>
          {/* Map over the configuration array to render items */}
          {settingsConfig.map(item => (
            <SettingsItem
              key={item.modalType}
              itemText={t(item.textKey)}
              itemIcon={item.icon}
              itemArrow={
                <ArrowLeft2 color='#01C0AA' size={20} className={isArabic ? '' : 'rotate-180'} />
              }
              onClick={() => setActiveModal(item.modalType as ModalType)}
            />
          ))}
        </div>
      </div>

      <Modal
        modalType={activeModal}
        onOpenChange={(isOpen: boolean) => {
          if (!isOpen) {
            setActiveModal(null);
          }
        }}
        setModalType={type => setActiveModal(type as ModalType)}
      />
    </section>
  );
};
