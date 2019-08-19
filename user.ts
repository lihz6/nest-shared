export interface UserU2S {
  username: string;
  password: string;
}

export interface UserS2S extends UserU2S {
  userflag: number;
}

export interface UserS2C {
  username: string;
  userflag: number;
  fullName: string;
  avatar: string;
}
