export type DeliveryManLogTypes = {
  id: number;
  name: string;
  phone: string;
  email: string;
  status: number;
  type: number;
  number_of_purchases: number;
  number_of_products: number;
  isCompletedDriverInformation: number;
  image: string;
  firebase: string;
  msgCode: number;
  token: string | null;
  driverInformation: {
    id: number;
    carModel: number;
    carType: {
      id: number;
      name: string;
      name_ar: string;
      name_en: string;
      image: string;
    };
    carLicenceFront: string;
    carLicenceBack: string;
    driverLicenceFront: string;
    driverLicenceBack: string;
    bloodTest: string;
    psychologicalHealth: string;
    currentOrder: number | null;
    total_orders: number;
    total_product_orders: number;
    my_wallet: number;
  };
  country: {
    id: number;
    name: string;
    icon: string;
    status: number;
    countryCode: string;
    name_ar: string;
    name_en: string;
  };
};
