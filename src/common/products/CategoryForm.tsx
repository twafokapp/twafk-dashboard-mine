import { useForm, type SubmitHandler } from 'react-hook-form';
import React, { useState, type ChangeEvent, useEffect } from 'react';
import { Tag } from 'lucide-react';
import { InputWithIcon } from '@/common/inputs';
import { FormLayout } from '@/common/formLayout';
import { t } from 'i18next';

export interface ICategoryFormData {
  category: string;
}

interface CategoryFormProps {
  onSubmit: SubmitHandler<ICategoryFormData>;
  isPending: boolean;
  initialData?: {
    name: string;
    image?: string;
  };
  mode: 'add' | 'edit';
  onImageChange: (file: File | null) => void;
}

export const CategoryForm: React.FC<CategoryFormProps> = ({
  onSubmit,
  isPending,
  initialData,
  mode,
  onImageChange,
}) => {
  const { register, handleSubmit, setValue } = useForm<ICategoryFormData>();
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  useEffect(() => {
    if (initialData) {
      setValue('category', initialData.name);

      if (initialData.image) {
        setImagePreview(initialData.image);
      }
    }
  }, [initialData, setValue]);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    } else {
      setImagePreview(null);
    }
    onImageChange(file);
  };

  return (
    <FormLayout
      title={
        mode === 'add'
          ? t('products_management.add_new_category')
          : t('products_management.edit_category')
      }
      buttonText={
        isPending
          ? t('buttons.loading')
          : mode === 'add'
            ? t('buttons.add_category')
            : t('buttons.save')
      }
      imagePreview={imagePreview}
      onImageChange={handleImageChange}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='flex flex-col items-center justify-center'>
        <InputWithIcon
          icon={<Tag className='h-4 w-4' />}
          placeholder={t('products_management.category_name')}
          {...register('category')}
        />
      </div>
    </FormLayout>
  );
};
