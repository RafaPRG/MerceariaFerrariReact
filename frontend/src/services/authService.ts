import api from './api';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface UserResponse {
  nome: string;
  email: string;
  tipo: string;
}

export interface LoginResponse {
  access_token: string;
  token_type: string;
  user: UserResponse;
}

export interface User {
  id?: string;
  name: string;
  email: string;
  role: string;
  favorites?: string[];
}

export const authService = {
  async login(credentials: LoginRequest): Promise<LoginResponse> {
    const response = await api.post('/user/login', {
      email: credentials.email,
      password: credentials.password,
    });
    return response.data;
  },

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user_data');
  },

  getToken(): string | null {
    return localStorage.getItem('access_token');
  },

  setUserData(userData: User): void {
    localStorage.setItem('user_data', JSON.stringify(userData));
  },

  getUserData(): User | null {
    const userData = localStorage.getItem('user_data');
    return userData ? JSON.parse(userData) : null;
  },
};

