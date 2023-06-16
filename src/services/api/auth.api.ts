import { ILoginResponse } from '~/lib/interfaces/user.interface';
import axios from '../../utils/axios'

interface CredentialInterface {
  email: string;
  password: string;
}

export const loginApi = async (LoginCredentials: CredentialInterface) => {
  const user = await axios.post<ILoginResponse>(`/auth/signin`, LoginCredentials)
  console.log(user.data.token)
};
