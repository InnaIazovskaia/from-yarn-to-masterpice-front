export interface UserCredentials {
  username: string;
  password: string;
}

export interface UserRegisterCredentials extends UserCredentials {
  email: string;
}

export interface UserData {
  id: string;
  token: string;
  username: string;
}

export interface UserState extends UserData {
  isLogged: boolean;
}
