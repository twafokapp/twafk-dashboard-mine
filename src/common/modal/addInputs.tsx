import { useState } from 'react';
import type { ModalType } from './modal';
import { Input } from '@/components/ui/input';
import { AppButton } from '../appButton/appButton';
import { Add, Trash } from 'iconsax-react';
import { t } from 'i18next';

// The new component to manage the dynamic list of inputs
export const AddInputs = ({
  type,
}: {
  setModalType: (type: ModalType) => void;
  type: 'vehicle' | 'unit';
}) => {
  // 1. State to hold an array of vehicle types
  const [inputType, setInputType] = useState([{ id: 1, value: '' }]);

  // Function to add a new, empty input field
  const handleAddInput = () => {
    const newId = inputType.length > 0 ? Math.max(...inputType.map(vt => vt.id)) + 1 : 1;
    setInputType([...inputType, { id: newId, value: '' }]);
  };

  // Function to remove an input field by its id
  const handleRemoveInput = (idToRemove: number) => {
    setInputType(inputType.filter(vt => vt.id !== idToRemove));
  };

  // Function to update the value of a specific input
  const handleInputChange = (idToUpdate: number, newValue: string) => {
    setInputType(inputType.map(vt => (vt.id === idToUpdate ? { ...vt, value: newValue } : vt)));
  };

  const handleSave = () => {};

  return (
    <div className='flex flex-col gap-[20px] w-full'>
      {inputType.map(vehicleType => (
        <div key={vehicleType.id} className='w-full flex items-center justify-center gap-[25px]'>
          <Input
            placeholder={type === 'vehicle' ? t('inputs.add_new_type') : t('inputs.add_new_unit')}
            className="w-full bg-[#F3F3F3] rounded-[8px] h-[40px] font-400 font-['cairo'] text-[16px] ps-[12px]"
            value={vehicleType.value}
            onChange={e => handleInputChange(vehicleType.id, e.target.value)}
          />
          {/* Only show the trash icon if there is more than one input */}
          {inputType.length > 1 && (
            <Trash
              size='24'
              color='red'
              className='cursor-pointer'
              onClick={() => handleRemoveInput(vehicleType.id)}
            />
          )}
        </div>
      ))}

      {/* 3. Button to add a new input */}
      <AppButton
        color='primary'
        className='flex items-center gap-2 w-full justify-center'
        onClick={handleAddInput}
      >
        <Add size='24' />
        <span className='text-[16px] font-400 text-nowrap'>
          {type === 'vehicle' ? t('buttons.add_new_type') : t('buttons.add_new_unit')}
        </span>
      </AppButton>

      {/* 4. Save button */}
      <AppButton
        color='save' // Changed color for differentiation
        className='flex items-center gap-2 w-full justify-center'
        onClick={handleSave}
      >
        <span className='text-[16px] font-400 text-nowrap'>{t('buttons.save')}</span>
      </AppButton>
    </div>
  );
};
