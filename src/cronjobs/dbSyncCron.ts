import cron from 'node-cron';
import  cronjonbServices from './services/cronjobs.services';


const syncLocalDb = cron.schedule('*/10 * * * * *', async () => {
    try {
        await cronjonbServices.updateDb();
        console.log('syncLocalDb cron successfully');
    } catch (error) {
        console.error('Error in syncDb cron', error);
    }
}, {
    scheduled: false
});
const syncRemoteDb = cron.schedule('*/10 * * * * *', async () => {
    try {
        await cronjonbServices.updateRemoteDb();
        console.log('syncRemoteDb cron successfully');
    } catch (error) {
        console.error('Error in syncRemoteDb cron', error);
    }
}, {
    scheduled: false
});

export function startJobs() {
    syncLocalDb.start();
    syncRemoteDb.start();
}


