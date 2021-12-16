export class User {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  admin: boolean;
  /* address: Address;
  roles: Role[]; */
  roleIds: number[];
  password: string;
}

export interface Credentials {
  username: string;
  password: string;
}