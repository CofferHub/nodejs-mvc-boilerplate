import {Router} from 'express';
import UserController from '../controllers/UserController';
import { 
     isAuthenticated, 
     isNotAuthenticated, 
     authenticateLogin, 
     authenticateRegister 
} from '../config/auth';

const router = Router();

// Rotas Get
router.get('/', UserController.getIndex);
router.get('/about', UserController.getAbout);
router.get('/contact', UserController.getContact);

router.get('/login', isNotAuthenticated, UserController.getLogin);
router.get('/register', isNotAuthenticated, UserController.getRegister);
router.get('/logout', UserController.getLogout);

// Rota autenticada
router.get('/auth', isAuthenticated, UserController.getAuth);

// Rotas Post
router.post('/register', authenticateRegister);
router.post('/login', authenticateLogin);

router.get('/error', (req,res) => {
     throw new Error('Erro Interno');
})

export default router;