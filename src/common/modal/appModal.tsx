import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog';

export function DialogCloseButton({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogContent className='bg-white p-[40px] border-none w-full lg:w-[678px] max-w-max sm:max-w-1/2'>
        <div className='flex flex-col items-center justify-center text-center'>
          <DialogHeader className='self-baseline mb-[34px]'>{children}</DialogHeader>
        </div>
      </DialogContent>
    </Dialog>
  );
}
