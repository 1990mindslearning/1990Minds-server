const express = require('express')
const router = express.Router()

const {createProject,getAllProject,getOneProject,updateProject,deleteProject}= require('../controller/project')

router.post('/project',createProject)
router.get('/project',getAllProject)
router.get('/project/:id',getOneProject)
router.put('/project/:id',updateProject)
router.delete('/project/:id',deleteProject)


module.exports = router;