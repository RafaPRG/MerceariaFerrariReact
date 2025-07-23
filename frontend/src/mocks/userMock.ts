import type { UserProps } from "../types/userType";

export const mockUsers: UserProps[] = [
  {
    id: "1",
    name: "Miguel Ferrari",
    email: "admin@merceariaferrari.com",

    role: "admin",
    favorites: [],
  },
  {
    id: "2",
    name: "Jucelino Freitas",
    email: "jucelinofreitas@gmail.com",

    role: "user",
    favorites: [],
  },
];
