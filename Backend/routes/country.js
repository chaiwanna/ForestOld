const router = require('express').Router();
const { check } = require('express-validator');
const {onProvinces,onDistricts,onSubdistricts} = require('../services/country');


//หน้าลงทะเบียน
router.get('/provinces',async (req,res) => {
    try{
        req.validate();
        const created = await onProvinces();
        res.json(created);
    }catch(ex){
        res.error(ex);
        
    }

});
router.get('/districts/:id',async (req,res) => {
    try{
        req.validate();
        const created = await onDistricts(req.params.id);
        res.json(created);
    }catch(ex){
        res.error(ex);
        
    }

});
router.get('/subdistricts/:id',async (req,res) => {
    try{
        req.validate();
        const created = await onSubdistricts(req.params.id);
        res.json(created);
    }catch(ex){
        res.error(ex);
        
    }

});

module.exports = router;