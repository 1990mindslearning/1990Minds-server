const express = require('express');
const router = express.Router()

const {createLeave,getAllLeave,getOneLeave,getEmployeeLeave,updateLeave,deleteLeave}=
require('../controller/leave')

router.post('/leaverequest',createLeave)
router.get('/leaverequest',getAllLeave)
router.get('/leaverequest/:id',getOneLeave)
router.put('/leaverequest/:id',updateLeave)
router.delete('/leaverequest/:id',deleteLeave)
router.get('/leavrequest-employee/:id',getEmployeeLeave)



module.exports = router; 

