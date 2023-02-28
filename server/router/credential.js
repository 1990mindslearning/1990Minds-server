const express = require('express')
const router = express.Router()

const {createCredential,getAllCredential,getOneCredential,updateCredential,deleteCredential}=
require('../controller/credential')

router.post('/credential',createCredential)
router.get('/credential',getAllCredential)
router.get('/credential/:id',getOneCredential)
router.put('/credential/:id',updateCredential)
router.delete('/credential/:id',deleteCredential)


module.exports = router;