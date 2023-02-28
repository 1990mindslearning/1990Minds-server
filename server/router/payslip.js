const express = require('express');
const router = express.Router()

const {createPayslip, getAllPayslip, getOnePayslip, getEmployeePayslip, updatePayslip, deletePayslip} = require('../controller/payslip');


router.post('/payslip',  createPayslip)
router.get ('/payslip',  getAllPayslip)
router.get ('/payslip/:id',  getOnePayslip)
router.get ('/payslip-employee/:id',  getEmployeePayslip)

router.put('/payslip/:id',  updatePayslip)
router.delete('/payslip/:id',  deletePayslip)


module.exports = router; 