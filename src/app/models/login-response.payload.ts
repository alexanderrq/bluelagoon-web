export interface LoginResponsePayload {
  token: string;
  tokenType: string;
  userId: number;
  username: string;
  email: string;
  roles: string[];
}
