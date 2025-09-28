export type SingleClient = {
  id: number;
  name: string;
  phone: string;
  email: string;
  status: number;
  type: number;
  isCompletedDriverInformation: number;
  image: string;
  firebase: string;
  msgCode: number;
  token: string | null;
  driverInformation: null; // Replace `unknown` with a proper type if known
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

export type ClientOrder = {
  orderNumber: string;
  product: string;
  paymentMethod: string;
  orderStatus: 'new' | 'processing' | 'completed' | 'canceled';
  invoiceAction: string;
};
