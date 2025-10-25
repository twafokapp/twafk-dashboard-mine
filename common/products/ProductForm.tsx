import { useForm, type SubmitHandler } from 'react-hook-form';
import React, { useState, type ChangeEvent, useEffect } from 'react';
import { PackagePlus, Truck, Boxes, Tag, Package, MapPin } from 'lucide-react';
import {
  InputWithIcon,
  PriceInputWithCurrency,
  SelectWithIcon,
  type IFormData,
} from '@/common/inputs';
import { FormLayout } from '@/common/formLayout';
import { t } from 'i18next';

interface ProductFormProps {
  onSubmit: SubmitHandler<IFormData>;
  isPending: boolean;
  initialData?: {
    name: string;
    cat: { id: string; name: string };
    quantity: string;
    price: string;
    shippingPrice: string;
    from_address: string;
    to_address: string;
    baseImage?: string;
  };
  mode: 'add' | 'edit';
}

export const ProductForm: React.FC<ProductFormProps> = ({
  onSubmit,
  isPending,
  initialData,
  mode,
}) => {
  const { register, handleSubmit, setValue } = useForm<IFormData>();
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  useEffect(() => {
    if (initialData) {
      setValue('productName', initialData.name);
      setValue('category', initialData.cat?.id);
      setValue('quantity', initialData.quantity);
      setValue('productPrice', initialData.price);
      setValue('shippingPrice', initialData.shippingPrice);
      setValue('deliveryLocation', initialData.from_address);
      setValue('deliverTo', initialData.to_address);
      if (initialData.baseImage) {
        setImagePreview(initialData.baseImage);
      }
    }
  }, [initialData, setValue]);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setImagePreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <FormLayout
      title={
        mode === 'add'
          ? t('products_management.add_new_product')
          : t('products_management.edit_product')
      }
      buttonText={
        isPending
          ? t('buttons.loading')
          : mode === 'add'
            ? t('buttons.add_product')
            : t('buttons.save')
      }
      imagePreview={imagePreview}
      onImageChange={handleImageChange}
      onSubmit={handleSubmit(onSubmit)} // Use the onSubmit function passed via props
    >
      <div className='flex flex-wrap justify-center gap-[10px]'>
        <InputWithIcon
          icon={<Package className='h-4 w-4' />}
          placeholder={t('products_management.product_name')}
          {...register('productName')}
        />
        <SelectWithIcon
          icon={<Tag className='h-4 w-4' />}
          placeholder={t('products_management.category')}
          options={[
            { value: 'electronics', label: 'Electronics' },
            { value: 'clothing', label: 'Clothing' },
          ]}
          onChange={e => setValue('category', e?.target?.value)}
        />
        <InputWithIcon
          icon={<Boxes className='h-4 w-4' />}
          placeholder={t('products_management.quantity')}
          type='number'
          {...register('quantity')}
        />
        <InputWithIcon
          icon={<MapPin className='h-4 w-4' />}
          placeholder={t('products_management.delivery_location')}
          {...register('deliveryLocation')}
        />
        <PriceInputWithCurrency
          placeholder={t('products_management.product_price')}
          priceName='productPrice'
          currencyName='productPriceCurrency'
          {...register('productPrice')}
          {...register('productPriceCurrency')}
        />
        <PriceInputWithCurrency
          placeholder={t('products_management.shipping_price')}
          priceName='shippingPrice'
          currencyName='shippingPriceCurrency'
          {...register('shippingPrice')}
          {...register('shippingPriceCurrency')}
        />
        <InputWithIcon
          icon={<PackagePlus className='h-4 w-4' />}
          placeholder={t('products_management.transfer_request')}
          {...register('transferRequest')}
        />
        <InputWithIcon
          icon={<Truck className='h-4 w-4' />}
          placeholder={t('products_management.deliver_to')}
          {...register('deliverTo')}
        />
      </div>
    </FormLayout>
  );
};
