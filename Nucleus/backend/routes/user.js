const  express =  require('express');

const router = express.Router();


const {firstapi , createuser , finduser , dashboard} = require('../controller/user')//import controllers from controller directory

// follow below pattern for creating the routes 
router.route('/first').get(firstapi);  
router.route('/create').post(createuser);  
router.route('/find').post(finduser);  
router.route('/dashboard').get(dashboard);  


module.exports = router; // exporting router