export interface TaskCreate {
   id_task: string;
   title: string;
   description: string;
   priority: string;
   remainder: string;
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
   id_task: sring;
   title: string;
   description: string;
   priority: string;
   remainder: string;
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