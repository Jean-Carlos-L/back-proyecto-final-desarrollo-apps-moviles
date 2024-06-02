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
   id_user: sring;
}

export interface UserThemeNotification {
   id_user: string;
   theme: string | undefined;
   notification: string | undefined;
}