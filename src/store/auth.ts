import { create } from "zustand";

interface CredentialInterface {
  email: string;
  password: string;
  setEmail: any;
  setPass: any
}

export const useAuthStore = create<CredentialInterface>(set => ({
  email: '',
  password: '',
  setEmail: async (email: string) => {
    set({email: email})
  },
  setPass: async (pass: string) => {
    set({password: pass})
  },
}))