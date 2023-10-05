import {Router} from 'express';
import multer  from 'multer';
import { CreateUserController } from './controllers/user/CreateUserController'
import { AutfUserController } from './controllers/user/AuthUserController';
import { DetailuserController } from './controllers/user/DetailUserController'
import { CreateCategoryController } from './controllers/category/CreateCategoryController'
import { ListCategoryController } from './controllers/category/ListCategoryController'
import { CreateProductController } from './controllers/product/CreateProductController'

import uploadConfig  from './config/multer'

import {isAutenticated} from './middlewares/isAutenticated'

const router = Router();
// upload de imagens
const upload = multer(uploadConfig.upload("./tmp"))
// rotas USER
router.post('/users', new CreateUserController().handle)
// criar usuario
router.post('/session', new AutfUserController().handle)
// chamar usuario
router.get('/me', isAutenticated, new DetailuserController().handle)

// -- RTAS CATEGORY
router.post('/category', isAutenticated, new CreateCategoryController ().handle )
// Listar categorias
router.get('/category', isAutenticated, new ListCategoryController().handle)

// -- ROTAS PRODUCT
router.post('/product', isAutenticated, upload.single('file'), new CreateProductController().handle)


export { router };