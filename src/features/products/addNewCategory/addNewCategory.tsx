import { CategoryForm, type ICategoryFormData } from '@/common/products/CategoryForm';
import React, { useState } from 'react';
import { useCreateCategory } from './apis/useCreateNewCategory';

export const AddNewCategory: React.FC = () => {
  const { mutate: createCategory, isPending } = useCreateCategory();
  // State to hold the actual image file
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleSubmit = (data: ICategoryFormData) => {
    // Use FormData to send both text and the image file
    const formData = new FormData();
    formData.append('name', data.category);
    if (imageFile) {
      formData.append('image', imageFile);
    }

    createCategory(formData);
  };

  return (
    <CategoryForm
      onSubmit={handleSubmit}
      isPending={isPending}
      mode='add'
      onImageChange={file => setImageFile(file)}
    />
  );
};
