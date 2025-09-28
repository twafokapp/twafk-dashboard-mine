export type ProductsManagementTypes = {
  id: number;
  name: string;
  description: string;
  price: string; // "200.00" comes as string from API
  shippingPrice: string; // "20.00" comes as string
  status: number;
  from_address: string;
  to_address: string;
  quantity: number;
  baseImage: string;
  cat: {
    id: number;
    name: string;
    image: string;
    status: number;
    name_ar: string;
    name_en: string;
  };
  driver: string | null;
  name_ar: string;
  name_en: string;
  description_ar: string;
  description_en: string;
};
