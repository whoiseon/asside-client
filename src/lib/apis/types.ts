export interface LoginParams {
  email: string;
  password: string;
}

export interface SignUpParams {
  username: string;
  email: string;
  password: string;
}

export interface UserProfileParams {
  username?: string;
  description?: string;
  profile?: string;
}

export interface LoginResult {
  user: User;
  tokens: Tokens;
}

export interface SignUpResult {
  registered: boolean;
}

export interface UserProfileResult extends User {
  createdAt: string;
  updatedAt: string;
  profile: string | null;
  description: string | null;
}

export interface User {
  id: number;
  email: string;
  username: string;
}

export interface Team {
  id: number;
  name: string;
  logo: string | null;
  createdAt: Date;
  updatedAt: Date;
  leaderId: number;
}

export interface Project {
  id: number;
  name: string;
  thumbnail: string | null;
  body: string;
  public: boolean;
  createdAt: Date;
  updatedAt: Date;
  teamId: number;
  leaderId: number;
  recruitmentId: number | null;
}

export interface StudyGroup {
  id: number;
  name: string;
  thumbnail: string | null;
  body: string;
  public: boolean;
  createdAt: Date;
  updatedAt: Date;
  teamId: number;
  leaderId: number;
  recruitmentId: number | null;
}

export interface Tokens {
  accessToken: string;
  refreshToken: string;
}
