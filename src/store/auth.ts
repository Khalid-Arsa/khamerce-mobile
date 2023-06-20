import { create } from "zustand";
import { ILoginCredentials } from "~/lib/interfaces/user.interface";

interface CredentialInterface {
  credentials: {
    email: string,
    password: string
  },
  setCredentials: any
}

export const useAuthStore = create<CredentialInterface>(set => ({
  credentials: {
    email: '',
    password: ''
  },
  setCredentials: async (data: ILoginCredentials) => {
    set({credentials: {
      email: data.email,
      password: data.password
    }})
  },
}))