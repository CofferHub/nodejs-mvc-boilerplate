const router = require('express').Router();
const UserController = require('../controllers/UserController');

router.get('/', UserController.index);
router.get('/view/:id', UserController.view);
router.get('/update/:id', UserController.upate);
router.post('/create', UserController.create);
router.put('/update/:id', UserController.update);
router.delete('/delete/:id', UserController.delete);

module.exports = router;