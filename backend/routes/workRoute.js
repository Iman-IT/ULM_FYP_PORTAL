const express = require('express')
const { getTask ,getTasks,createTask,deleteTask,updateTask} = require('../controller/workcontroller')
const router= express.Router()


router.get('/',getTasks)
router.get('/:id',getTask)
router.post('/',createTask)
router.delete('/:id',deleteTask)
router.patch('/:id',updateTask)


module.exports = router;