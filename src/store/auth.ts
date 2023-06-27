import {create} from 'zustand';
import {ILoginCredentials} from '~/lib/interfaces/user.interface';

interface CredentialAuthInterface {
  credentials: ILoginCredentials;
  actions: {
    setCredentials: (credentials: ILoginCredentials) => void;
  };
}

export const useAuthStore = create<CredentialAuthInterface>(set => ({
  credentials: {
    email: '',
    password: '',
  },
  actions: {
    setCredentials: async (data: ILoginCredentials) => {
      set({
        credentials: {
          email: data.email,
          password: data.password,
        },
      });
    },
  },
}));
