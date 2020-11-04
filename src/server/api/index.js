import { Router } from 'express';
import user from './user';

const apiRouter = Router();

apiRouter.use('/user', user);

export default apiRouter;
