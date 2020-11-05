import { AsyncRouter } from 'express-async-router';
import controller from './alert.controller';

const alertRouter = io => {
    const router = AsyncRouter();
    const alertController = controller(io);

    router.put('/', alertController.update);

    return router;
}

export default alertRouter;