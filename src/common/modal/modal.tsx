import { Dialog, DialogContent, DialogTitle, DialogHeader } from '@/components/ui/dialog';
import { AppDescriptionModal } from '@/features/settingsSystem/modals/AppDescriptionModal';
import { ContactNumbersModal } from '@/features/settingsSystem/modals/contactNumbersModal';
import { CurrencyModal } from '@/features/settingsSystem/modals/CurrencyModal';
import type { ModalType, ModalContent } from '@/features/settingsSystem/modalTypes';
import { PriceKiloModal } from '@/features/settingsSystem/modals/priceKiloModal';
import { PrivacyPolicyModal } from '@/features/settingsSystem/modals/privacyPolicyModal';
import { TermsAndConditionsModal } from '@/features/settingsSystem/modals/termsAndConditionsModal';
import { VehicleTypesAddModal } from '@/features/settingsSystem/modals/vehicleTypesAddModal';
import { VehicleTypesModal } from '@/features/settingsSystem/modals/VehicleTypesModal';
import { WeightUnitsAddModal } from '@/features/settingsSystem/modals/weightUnitsAddModal';
import { WeightUnitsModal } from '@/features/settingsSystem/modals/weightUnitsModal';

interface SettingsModalProps {
  modalType: ModalType;
  onOpenChange: (isOpen: boolean) => void;
  setModalType: (type: ModalType) => void;
}

export function Modal({ modalType, onOpenChange, setModalType }: SettingsModalProps) {
  const isOpen = modalType !== null;

  if (!isOpen) return null;

  const getModalContent = (): ModalContent | null => {
    switch (modalType) {
      case 'vehicle_types':
        return VehicleTypesModal({ setModalType });
      case 'vehicle_types_add':
        return VehicleTypesAddModal({ setModalType });
      case 'weight_units':
        return WeightUnitsModal({ setModalType });
      case 'weight_units_add':
        return WeightUnitsAddModal({ setModalType });
      case 'price_kilo':
        return PriceKiloModal();
      case 'currency':
        return CurrencyModal();
      case 'app_description':
        return AppDescriptionModal();
      case 'contact_numbers_and_customer_service':
        return ContactNumbersModal();
      case 'terms_and_conditions':
        return TermsAndConditionsModal();
      case 'privacy_policy':
        return PrivacyPolicyModal();
      default:
        return null;
    }
  };

  const content = getModalContent();
  if (!content) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className='bg-white p-[40px] border-none w-full lg:w-[678px] max-w-max sm:max-w-1/2'>
        <div className='flex flex-col items-center justify-center text-center'>
          <DialogHeader className='self-baseline mb-[34px]'>
            <DialogTitle className='font-400 text-[16px]'>{content.title}</DialogTitle>
          </DialogHeader>
          {content.body}
        </div>
      </DialogContent>
    </Dialog>
  );
}
