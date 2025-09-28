export type ShipmentsManagement = {
  id: number;
  status: number;
  orderDetails: string;
  orderSize: number;
  distance: number;
  price: number;
  from_address: {
    id: number;
    lat: number;
    lng: number;
    address: string;
  };
  to_address: {
    id: number;
    lat: number;
    lng: number;
    address: string;
  };
  car: {
    id: number;
    name: string;
    name_ar: string;
    name_en: string;
    image: string;
  };
  weight: {
    id: number;
    name: string;
    name_ar: string;
    name_en: string;
  };
  currency: {
    id: number;
    name: string;
    name_ar: string;
    name_en: string;
  };
  type: {
    id: number;
    title: string;
    title_ar: string;
    title_en: string;
  };
  user: {
    id: number;
    name: string;
    phone: string;
    email: string;
    status: number;
    type: number;
    number_of_purchases: number;
    isCompletedDriverInformation: number;
    image: string;
    firebase: string | null;
    msgCode: number;
    token: string | null;
    driverInformation: null;
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
  driver: null | {
    // if later driver object structure is added, define here
    [key: string]: unknown;
  };
};
