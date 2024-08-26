const  express =  require('express');

const router = express.Router();


const {firstapi , createuser} = require('../controller/user')//import controllers from controller directory

// follow below pattern for creating the routes 
router.route('/first').get(firstapi);  
router.route('/create').post(createuser);  


module.exports = router; // exporting router