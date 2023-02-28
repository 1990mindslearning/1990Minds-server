const express = require("express");
const router = express.Router();
const {createPdf,fetchTempletPdf} = require('../controller/filedownload');



router.post('/create-pdf',createPdf)

router.get('/fetch-templetpdf',fetchTempletPdf)

module.exports = router;  