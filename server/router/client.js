const express = require('express')
const router = express.Router()

const {createClient,getAllClient,getOneClient,updateClient,deleteClient}=
require('../controller/client')

router.post('/client',createClient);
router.get('/client',getAllClient);
router.get('/client/:id',getOneClient);
router.put('/client/:id',updateClient);
router.delete('/client/:id',deleteClient)


module.exports = router;