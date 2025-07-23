import api from './api';

export interface Product {
  id: string;
  nome: string;
  preco: number;
  categoria: string;
  descricao?: string;
  imagem_url?: string;
}

export const productService = {
  async getAllProducts(): Promise<Product[]> {
    const response = await api.get('/produtos');
    return response.data;
  },

  async getProductById(id: string): Promise<Product> {
    const response = await api.get(`/produtos/${id}`);
    return response.data;
  },
};

