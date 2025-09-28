export type ShipmentsReports = {
  id: number;
  shipmentNumber: string;
  orderDate: string;
  weight: string;
  shipmentType: string;
  clientName: string;
  destinationFrom: string;
  destinationTo: string;
  deliveryLocation: string;
  deliveryDate: string;
  price: number;
}[];
