export type User = {
    id: string;
    name: string;
    lastname: string;
    email: string;
    password: string;
    birthdate: Date;
  };

  export type SignUpUsuario = Omit<User, 'id'>