interface CredentialInterface {
  email: string;
  password: string;
}

export const loginApi = ({email, password}: CredentialInterface) => {
  console.log(email);
  console.log(password);
};
