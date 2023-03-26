import { JwtPayload } from "jwt-decode";

export interface LoginResponse {
  token: string;
}

export interface ErrorResponse {
  message: string;
}

export interface CustomTokenPayload extends JwtPayload {
  id: string;
  email: string;
  username: string;
}
