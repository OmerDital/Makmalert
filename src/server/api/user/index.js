import { AsyncRouter } from 'express-async-router';
import get from './user.controller';

const userRouter = AsyncRouter();

userRouter.get('/', get);

export default userRouter;
