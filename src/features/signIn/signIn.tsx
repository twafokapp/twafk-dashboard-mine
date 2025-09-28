import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { AppButton } from '@/common/appButton/appButton';
import logoUrl from '@/assets/imgs/logo.svg';
import { useSignIn } from './apis/useSignIn';

const SignInSchema = z.object({
  email: z.email({ message: 'الرجاء إدخال بريد إلكتروني صحيح' }),
  password: z.string().min(1, { message: 'الرجاء إدخال كلمة المرور' }),
});

export type SignInFormValues = z.infer<typeof SignInSchema>;

export const SignIn = () => {
  const { mutate: login, isPending } = useSignIn();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormValues>({
    resolver: zodResolver(SignInSchema),
  });

  const onSubmit = (inputs: SignInFormValues) => {
    login(inputs);
  };
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-sidebar text-sidebar-foreground p-10 sm:p-0'>
      <div className='mb-8'>
        <img
          src={logoUrl}
          alt='Nakhdemak Logo'
          className='w-auto h-[60px] sm:h-[90px] object-contain'
        />
      </div>

      <div className='mt-[50px] bg-transparent  w-full max-w-sm flex flex-col items-center'>
        <form className='w-auto sm:w-[400px] space-y-[20px]' onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              type='email'
              className='w-full py-[7px] px-[20px] font-cairo text-[18px] bg-white text-[#BFBFBF] rounded-[12px] text-right focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200'
              placeholder='البريد الإلكتروني'
              {...register('email')}
            />
            {errors.email && (
              <p className='text-red-500 text-sm text-right mt-1'>{errors.email.message}</p>
            )}
          </div>

          <div>
            <input
              type='password'
              className='w-full py-[7px] px-[20px] font-cairo text-[18px] bg-white text-[#BFBFBF] rounded-[12px] text-right focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200'
              placeholder='كلمة المرور'
              {...register('password')}
            />
            {errors.password && (
              <p className='text-red-500 text-sm text-right mt-1'>{errors.password.message}</p>
            )}
          </div>

          {/* <div className='text-left text-sm mt-2'>
            <a href='#' className=' hover:underline text-white text-[18px ] font-cairo font-[300]'>
              نسيت كلمة المرور؟
            </a>
          </div> */}

          <AppButton className='text-[20px] w-full' disabled={isPending}>
            {isPending ? 'جاري تسجيل الدخول...' : 'تسجيل الدخول'}
          </AppButton>
        </form>
      </div>
    </div>
  );
};
