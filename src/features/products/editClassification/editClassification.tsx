import { CategoryForm, type ICategoryFormData } from '@/common/products/CategoryForm';
import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useUpdateCategory } from './apis/useUpdateCategory';

export const EditClassification: React.FC = () => {
  const { state: categoryData } = useLocation();
  const { id: categoryId } = useParams();
  const { mutate: updateCategory, isPending } = useUpdateCategory();
  // State to hold the new image file, if one is chosen
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleSubmit = (data: ICategoryFormData) => {
    const formData = new FormData();
    formData.append('id', categoryId!);
    formData.append('name', data.category);
    if (imageFile) {
      formData.append('image', imageFile);
    }

    updateCategory(formData);
  };

  return (
    <CategoryForm
      onSubmit={handleSubmit}
      isPending={isPending}
      initialData={categoryData}
      mode='edit'
      onImageChange={file => setImageFile(file)}
    />
  );
};
