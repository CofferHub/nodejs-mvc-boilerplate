import {Router} from 'express';
import UserController from '../controllers/UserController';
import { isAuthenticated, authenticateLogin, authenticateRegister } from '../config/auth';

const router = Router();

router.get('/', UserController.getIndex);
router.get('/about', UserController.getAbout);
router.get('/contact', UserController.getContact);

router.get('/login', UserController.getLogin);
router.get('/register', UserController.getRegister);
router.get('/logout', UserController.getLogout);

// Rota autenticada
router.get('/auth', isAuthenticated, UserController.getAuth);

router.post('/register', authenticateRegister);
router.post('/login', authenticateLogin);

export default router;