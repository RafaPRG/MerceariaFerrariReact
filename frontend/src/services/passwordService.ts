import api from './api';

export interface UpdatePasswordRequest {
  email: string;
  new_password: string;
}

export const passwordService = {
  async updatePassword(data: UpdatePasswordRequest): Promise<{ message: string }> {
    const response = await api.put('/user/update-password', {
      email: data.email,
      new_password: data.new_password,
    });
    return response.data;
  },
};

