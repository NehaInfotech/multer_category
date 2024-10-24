const mongoose = require('mongoose')
const schema = new mongoose.Schema({
  name:{ 
    type:String,
    required:true
  },
  title:{
    type:String,
    required:true
  },
  image:{
    type:String,
    required:true
  }
})
module.exports = mongoose.model('schema1', schema)