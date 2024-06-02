export interface User {
   id: string;
   username: string;
   email: string;
   password: string;
   theme?: string;
   notification?: string;
   state: number;
   create_at: string;
   update_at: string;
}