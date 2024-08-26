const  express =  require('express');

const router = express.Router();


const {firstapi ,createadmin ,createinvoice} = require('../controller/admin')//import controllers from controller directory

// follow below pattern for creating the routes 
router.route('/first').get(firstapi);  
router.route('/create').post(createadmin);  
router.route('/createinvoice').post(createinvoice);  


module.exports = router; // exporting router