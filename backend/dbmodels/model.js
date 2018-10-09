var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

    ourinfoShema = new Schema({
      name:String,
      data:Array
    });

module.exports = mongoose.model('linechart', ourinfoShema);
// mongoose.model(modelName, schema)
