import React from 'react';
import { ArrowRotateLeft } from 'iconsax-react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import authLogo from '../../assets/imgs/logo.svg';
import errorImage from '../../assets/imgs/error.svg';
import { AppButton } from '../appButton/appButton';

export const ErrorComponent: React.FC<{
  error: Error;
  errorInfo: React.ErrorInfo | null;
}> = ({ error, errorInfo }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleRefresh = () => {
    window.location.reload();
  };

  const handleGoHome = () => {
    navigate('/');
  };

  //   const handleContactSupport = () => {
  //     const getUrl = () => {
  //       const url = new URL(window.location.href);
  //       return url.href;
  //     };

  //     const text = `
  //     مرحبا , هل يمكنني التحدث إلى أحد ممثلي
  //      \n My-Cash؟
  //      \n لدي مشكلة في التطبيق وأحتاج المساعدة
  //      \n والمشكله في ${getUrl()}`;

  //     const linkWhatsapp = `https://api.whatsapp.com/send?phone=966112221500&text=${encodeURIComponent(text)}`;
  //     window.open(linkWhatsapp);
  //   };

  return (
    <div className='relative h-screen w-screen bg-[#1F263E] overflow-hidden flex flex-col'>
      {/* Main content */}
      <div className='relative flex-col h-full flex items-center justify-center overflow-hidden'>
        {/* Main error content */}
        <div className='flex flex-row items-center justify-center gap-24 z-10 relative px-4 lg:gap-16 flex-wrap md:gap-8 md:px-4'>
          {/* Error illustration */}
          <div>
            <img
              src={errorImage}
              alt='error-illustration'
              className='w-full h-auto object-contain lg:w-[70%] md:w-48'
            />
          </div>

          {/* Text and buttons section */}
          <div className='flex flex-col items-center gap-8 max-w-[360px] md:max-w-full md:gap-6'>
            {/* Logo */}
            <div className='z-10'>
              <img src={authLogo} alt='auth-logo' className='h-18 w-auto md:h-18' />
            </div>

            {/* Error text */}
            <div className='text-center space-y-2'>
              <h1 className='font-bold text-indigo-100 text-3xl leading-11 md:text-2xl md:leading-8'>
                {t('error.title')}
              </h1>
              <p className='font-medium text-indigo-100 text-2xl leading-11 md:text-lg md:leading-7'>
                {t('error.subtitle')}
              </p>
            </div>

            {/* Action buttons */}
            <div className='w-full flex flex-col gap-4 items-center'>
              <AppButton
                buttonText={t('error.mainPage')}
                onClick={handleGoHome}
                color='primary'
                variant='contained'
                width='long'
                height='normal'
                space='normal'
              />

              {/* <AppButton
                buttonText={t('contact-support')}
                onClick={handleContactSupport}
                color='primary'
                width='long'
                height='normal'
                space='normal'
              /> */}

              <AppButton
                onClick={handleRefresh}
                color='primary'
                variant='outlined'
                width='long'
                height='normal'
                space='normal'
              >
                <div className='flex items-center justify-center gap-2'>
                  <ArrowRotateLeft size={24} />
                  <span>{t('error.update')}</span>
                </div>
              </AppButton>
            </div>
          </div>
        </div>
        {/* Error details */}
        {import.meta.env.MODE === 'development' && (
          <div className='w-[50%] h-full bg-white flex flex-col gap-2'>
            <p>{error.message}</p>
            <p>{error.name}</p>
            <p>{errorInfo?.componentStack}</p>
          </div>
        )}
      </div>
    </div>
  );
};
