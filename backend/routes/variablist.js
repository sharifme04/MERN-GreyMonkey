var express = require('express'),
    router = express.Router(),
    dbQuery = require('../dbquery/query');

    router.get('/',(req, res, next)=>{
      dbQuery.getAllData().then(
        data=>{res.send({success:true, data:data});console.log(data);}
       ,err => res.send({success:false, msg:err})
      )
    })

    router.get('/get/:name',(req, res, next)=>{
      var name = req.params.name;
      console.log(name);
      dbQuery.getById(name).then(
         userData=>res.send({success:true, data:userData})
        ,err => res.send({success:false, msg:err})
      )
    })

module.exports = router;
