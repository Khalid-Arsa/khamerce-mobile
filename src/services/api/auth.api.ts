interface CredentialInterface {
  email: string;
  password: string;
}

export const loginApi = (creds: CredentialInterface) => {
  console.log(creds)
}