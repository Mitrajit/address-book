const express = require('express');

const router = express.Router();
const controller = require('../controllers/crudOperations');
const authentication = require('../controllers/authentication');

const auth = require('../middleware/auth');

router.post('/register', authentication.register);
router.post('/login', authentication.login);

router.post('/new', auth, controller.oneNewContact);
router.post('/addBulk', auth, controller.addBulk);
router.get('/getSingleContact/', auth, controller.getSingleContact);
router.get('/getContacts', auth, controller.getContacts);
router.get('/getAll', auth, controller.getAll);
router.put('/update', auth, controller.update);
router.delete('/delete', auth, controller.deleteContact);

module.exports = router;
