import {Router} from 'express';
import UserController from '../controllers/UserController';

const router = Router();

router.get('/', UserController.index);
router.get('/view/:id', UserController.view);
router.get('/update/:id', UserController.viewUpdate);
router.post('/create', UserController.create);
router.put('/update/:id', UserController.update);
router.delete('/delete/:id', UserController.delete);

export default router;