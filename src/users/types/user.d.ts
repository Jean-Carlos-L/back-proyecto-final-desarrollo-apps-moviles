export interface UserCreate {
   username: string;
   email: string;
   password: string;
}

export interface UserUpdate {
   username: string;
   email: string;
   password?: string;
   theme: string | undefined;
   notification: string | undefined;
   id: number;
}

export interface UserThemeNotification {
   theme: string | undefined;
   notification: string | undefined;
   id: number;
}