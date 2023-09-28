import {Router} from 'express';

import { CreateUserController } from './controllers/user/CreateUserController'
import { AutfUserController } from './controllers/user/AuthUserController';

const router = Router();
// rotas USER
router.post('/users', new CreateUserController().handle)
// criar usuario
router.post('/session', new AutfUserController().handle)

export { router };