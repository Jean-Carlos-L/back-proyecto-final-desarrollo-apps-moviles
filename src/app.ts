import express from 'express';
import cors from 'cors';
import userRouter from './users/routes/user.routes'
import taskRouter from './tasks/routes/task.routes'
import syncRouter from './sync/routes/sync.routes'

const app = express();
app.use(express.json());
app.use(cors());


app.get('/', (_, res) => {
   res.send('Hello World');
});

app.use('/api/v1/users', userRouter);
app.use('/api/v1/tasks', taskRouter);
app.use('/api/v1/sync', syncRouter);

export default app;