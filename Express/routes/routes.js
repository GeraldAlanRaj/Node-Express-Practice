const express = require('express');
const { createUser, readUser, updateUser, getUserById, deleteUser, filterUser } = require('../controllers/controllers');

const router = express.Router();

router.get('/filter', filterUser);
router.get('/',readUser);
router.post('/', createUser);
router.put('/:id',updateUser);
router.get('/:id', getUserById);
router.delete('/:id',deleteUser);


module.exports = router;