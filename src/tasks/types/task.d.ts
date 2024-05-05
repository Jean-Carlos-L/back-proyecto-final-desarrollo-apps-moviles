export interface TaskCreate {
   title: string;
   description: string;
   latitude?: string;
   longitude?: string;
   altitude?: string;
   accuracy?: string;
   altitudeAccuracy?: string;
   heading?: string;
   speed?: string;
   timestamp?: string;
   state?: string;
   user_id: number;
}

export interface TaskUpdate {
   id: number;
   title: string;
   description: string;
   latitude?: string;
   longitude?: string;
   altitude?: string;
   accuracy?: string;
   altitudeAccuracy?: string;
   heading?: string;
   speed?: string;
   timestamp?: string;
   state?: string;
}