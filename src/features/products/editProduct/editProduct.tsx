import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useUpdateProduct } from './apis/useUpdateProduct';
import { type IFormData } from '@/common/inputs';
import { ProductForm } from '@/common/products/ProductForm';

export const EditProduct: React.FC = () => {
  const { state: productData } = useLocation();
  const { id: productId } = useParams();

  // ✅ The component only cares about the update logic
  const { mutate: updateProduct, isPending } = useUpdateProduct();

  // ✅ The submit handler prepares the data for the update API
  const handleSubmit = (data: IFormData) => {
    const payload = {
      id: Number(productId),
      name: data.productName,
      description: data.category,
      price: Number(data.productPrice),
      quantity: Number(data.quantity),
    };
    updateProduct(payload);
  };

  return (
    <ProductForm
      onSubmit={handleSubmit}
      isPending={isPending}
      initialData={productData}
      mode='edit'
    />
  );
};
