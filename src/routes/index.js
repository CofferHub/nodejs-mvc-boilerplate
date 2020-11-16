import {Router} from 'express';
import UserController from '../controllers/UserController';

const router = Router();

router.get('/', UserController.getIndex);
router.get('/login', UserController.getLogin);
router.get('/register', UserController.getRegister);
router.get('/about', UserController.getAbout);
router.get('/contact', UserController.getContact);

// router.get('/view/:id', UserController.view);
// router.get('/update/:id', UserController.viewUpdate);
// router.post('/create', UserController.create);
// router.put('/update/:id', UserController.update);
// router.delete('/delete/:id', UserController.delete);

export default router;