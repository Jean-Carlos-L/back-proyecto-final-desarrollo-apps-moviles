import express from 'express';
import userRouter from './users/routes/user.routes'
import taskRouter from './tasks/routes/task.routes'

const app = express();
app.use(express.json());


app.get('/', (_, res) => {
   res.send('Hello World');
});

app.use('/api/v1/users', userRouter);

app.use('/api/v1/tasks', taskRouter)

export default app;