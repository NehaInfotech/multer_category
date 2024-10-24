const mongoose = require('mongoose')
const schema = new mongoose.Schema({
  name:{ 
    type:String,
    required:true
  },
  price:{
    type:String,
    required:true
  },
  category:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"schema1",
    required:true
  },
  image: {
    type: String,
    required: true
}
})
module.exports = mongoose.model('schema2', schema)