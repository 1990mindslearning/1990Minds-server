const express = require('express');
const router = express.Router()

const {createEmployee,getAllEmployee, getOneEmployee, updateEmployee, deleteEmployee,login,empProfile,isAuthenticate,updateNotify} = 
require('../controller/employee');


router.post('/employee',  createEmployee)
router.get('/employee',  getAllEmployee)
router.get('/employee/:id',  getOneEmployee)
router.put('/employee/:id',  updateEmployee)
router.delete('/employee/:id',  deleteEmployee)
router.put('/updateEmpNotification/:id',updateNotify)

router.post('/empAuth', login)
router.get('/empProfile',isAuthenticate, empProfile)


module.exports = router; 