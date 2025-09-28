import { SINGLE_CLIENT } from '@/constants/queryKeys';
import { useQuery } from '@tanstack/react-query';
import { getClientById } from './singleClientApis';
import type { ApiResponse } from '@/types/types';

type Client = {
  id: number;
  name: string;
  phone: string;
  email: string;
  status: number;
  type: number;
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

export const useGetClientById = (clientId: string | undefined) => {
  return useQuery<ApiResponse<Client>>({
    queryKey: [SINGLE_CLIENT, clientId],
    queryFn: () => getClientById(clientId!),
    enabled: !!clientId,
  });
};
