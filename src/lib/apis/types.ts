export interface LoginParams {
  email: string;
  password: string;
}

export interface SignUpParams {
  username: string;
  email: string;
  password: string;
}

export interface LoginResult {
  user: User;
  tokens: Tokens;
}

export interface SignUpResult {
  registered: boolean;
}

export interface User {
  id: number;
  email: string;
  username: string;
}

export interface Tokens {
  accessToken: string;
  refreshToken: string;
}
