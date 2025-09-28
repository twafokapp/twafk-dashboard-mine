export type ModalType =
  | 'vehicle_types'
  | 'vehicle_types_add'
  | 'weight_units'
  | 'weight_units_add'
  | 'price_kilo'
  | 'currency'
  | 'app_description'
  | 'contact_numbers_and_customer_service'
  | 'terms_and_conditions'
  | 'privacy_policy'
  | 'system_settings'
  | null;

export interface ModalContent {
  title: React.ReactNode;
  body: React.ReactNode;
}
