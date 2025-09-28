import React from 'react';
import { useCreateProduct } from './apis/useCreateNewProduct';
import { type IFormData } from '@/common/inputs';
import { ProductForm } from '@/common/products/ProductForm';

export const AddNewProduct: React.FC = () => {
  // ✅ The component only cares about the create logic
  const { mutate: createProduct, isPending } = useCreateProduct();

  // ✅ The submit handler prepares the data for the create API
  const handleSubmit = (data: IFormData) => {
    const payload = {
      name: data.productName,
      description: data.category,
      price: Number(data.productPrice),
      quantity: Number(data.quantity),
    };
    createProduct(payload);
  };

  return <ProductForm onSubmit={handleSubmit} isPending={isPending} mode='add' />;
};
