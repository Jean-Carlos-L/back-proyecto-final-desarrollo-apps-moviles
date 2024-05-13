require('dotenv').config()
import app from "./app";
import { startJobs } from "./cronjobs/dbSyncCron";

const PORT = process.env.PORT || 3050;

app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
   startJobs();
});