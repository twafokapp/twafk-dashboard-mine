import { Replace, UploadCloud } from 'lucide-react';
import type { ChangeEvent, FormEvent, ReactNode } from 'react';
import { useLocation } from 'react-router';
import { LayoutTitle } from './layoutTitle/layoutTitle';
import { AppButton } from './appButton/appButton';

interface FormLayoutProps {
  title: string;
  buttonText: string;
  imagePreview: string | null;
  onImageChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  children: ReactNode;
}

export const FormLayout: React.FC<FormLayoutProps> = ({
  title,
  buttonText,
  imagePreview,
  onImageChange,
  onSubmit,
  children,
}) => {
  const location = useLocation();
  const path = location.pathname.split('/').pop();
  return (
    <div className='mt-[37px]'>
      {/* <h1 className='text-[25px] font-normal text-[#000A12] mb-[45px] p-[10px]'>{title}</h1> */}
      <LayoutTitle title={title} />
      <div
        className={`mt-[40px] mb-[10px] bg-white rounded-[10px] pt-[31px] pb-[44px] shadow-sm border border-[#E1E1E1] ${path === 'add-new-category' ? 'h-[513px] flex  justify-center items-center w-full' : ' '}`}
      >
        <form onSubmit={onSubmit} className='mx-auto max-w-4xl px-[20px] w-full'>
          <div className='mb-[25px] flex justify-center'>
            <label
              htmlFor='file-upload'
              className='group relative flex h-[137px] w-full max-w-[305px] cursor-pointer flex-col items-center justify-center rounded-[6.18px] border-[0.62px] border-dashed border-[rgba(0,0,0,0.18)] bg-[#F5F6F8] hover:bg-gray-100'
            >
              {imagePreview ? (
                <>
                  <img
                    src={imagePreview}
                    alt='Preview'
                    className='h-full w-full rounded-[6.18px] object-cover'
                  />
                  <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity group-hover:opacity-100'>
                    <Replace className='h-10 w-10 text-white' />
                  </div>
                </>
              ) : (
                <UploadCloud className='h-[65.23px] w-[90.75px] text-[#C2CFE0]' />
              )}
              <input
                id='file-upload'
                type='file'
                className='hidden'
                accept='image/*'
                onChange={onImageChange}
              />
            </label>
          </div>

          {children}

          <div className='mt-[44px] flex justify-center'>
            <AppButton
              className={`w-full max-w-[305px]  ${path === 'add-new-product' ? 'lg:max-w-[620px]' : ''}`}
            >
              {buttonText}
            </AppButton>
          </div>
        </form>
      </div>
    </div>
  );
};
