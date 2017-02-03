const express = require('express');

const router = express.Router();

router.get("/pay", (req, res, next)=>{
    res.json({id: '01', name: 'Emma', tel: '078683564', age: "29"});
})

module.exports = router;