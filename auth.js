const express=require('express');
const authcontroller=require('../controllers/auth');
const router=express.Router();

router.POST('/register',authcontroller.register)
module.exports = router;