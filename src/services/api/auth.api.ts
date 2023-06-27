import { ILoginCredentials, ILoginResponse } from '~/lib/interfaces/user.interface';
import axios from '../../utils/axios'

export const loginApi = async (LoginCredentials: ILoginCredentials) => {
  const user = await axios.post<ILoginResponse>(`/auth/signin`, LoginCredentials)
  console.log(user.data.token)
};
