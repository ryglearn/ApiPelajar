const express = require('express');
const router = express.Router();

const pelajarController = require('../controllers/pelajarController');
const {createPelajar, updatePelajar} = require('../middlewares/validation');

router.get('/', pelajarController.getAll);
router.get('/:id', pelajarController.getById);
router.post('/', createPelajar, pelajarController.create);
router.put('/:id', updatePelajar, pelajarController.update);
router.delete('/:id', pelajarController.remove);


module.exports = router;