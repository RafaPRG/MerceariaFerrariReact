import api from './api';

export interface Favorite {
  id: string;
  user_id: string;
  produto_id: string;
}

export const favoriteService = {
  async getUserFavorites(): Promise<Favorite[]> {
    const response = await api.get('/favoritos');
    return response.data;
  },

  async addFavorite(produtoId: string): Promise<Favorite> {
    const response = await api.post('/favoritos', {
      produto_id: produtoId,
    });
    return response.data;
  },

  async removeFavorite(produtoId: string): Promise<void> {
    await api.delete('/favoritos', {
      data: {
        produto_id: produtoId,
      }
    });
  },
};

