import { Router } from 'express';
import alert from './alert';

const apiRouter = io => {
    const router = Router();

    router.use('/alert', alert(io));

    return router;
}
export default apiRouter;