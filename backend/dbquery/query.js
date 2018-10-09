var Promise = require("bluebird"),
    dbModel = require('../dbmodels/model');

class Query {
  getAllData(){
     return dbModel.find({}).exec();
  }
getById(name,data){
  return new Promise((resolve, reject) =>{
    dbModel.findOne({name:name},data).then(
      userData =>resolve(userData)
      ,err => reject(err)
     )
  })
}

}
module.exports  = new Query();
