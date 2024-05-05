export interface UserCreate {
   username: string;
   email: string;
   password: string;
}

export interface UserUpdate {
   username: string;
   email: string;
   password: string;
   id: number;
}