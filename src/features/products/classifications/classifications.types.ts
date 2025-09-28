export type Classifications = {
  id: number;
  name: string;
  description: string;
  price: string;
  shippingPrice: string;
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
  }; // can still be null in other cases
};
