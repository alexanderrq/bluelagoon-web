export interface SignUpRequestPayload {
  username: string;
  password: string;
  email: string;
  phoneNumber: string;
  roles?: string[];
}
