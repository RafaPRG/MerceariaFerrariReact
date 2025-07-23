export interface UserProps {
  id: string;
  name: string;
  email: string;
  role: string;
  favorites?: string[];
}

export interface ProductProps {
  id: string;
  nome: string;
  preco: number;
  categoria: string;
  descricao?: string;
  imagem_url?: string;
}
