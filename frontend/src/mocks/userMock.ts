import type { UserProps } from "../types/userType";

export const mockUsers: UserProps[] = [
  {
    id: "1",
    name: "Miguel Ferrari",
    email: "admin@merceariaferrari.com",
    password: "admin123",
    role: "admin",
    favorites: [],
  },
  {
    id: "2",
    name: "Jucelino Freitas",
    email: "jucelinofreitas@gmail.com",
    password: "juce123",
    role: "user",
    favorites: [],
  },
];
