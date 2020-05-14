const router = require('express').Router();
const {onRegister} = require('../services/account');

//หน้าลงทะเบียน
router.get('/register',[
],async (req,res) => {
    try{
        onRegister();  
    }catch(ex){
        res.error(ex);
        
    }
   

});

module.exports = router;