var mongoose =require('mongoose'),
    unique =require('mongoose-unique-validator');

let PetSchema = mongoose.Schema({
  name: {
    type: String,
    unique:true,
    required: [true, 'Name is required'],
    minlength: [3, "Name must be at least 3 characters."]
  },
  type: {
    type: String,
    required: [true, 'Type is required'],
    minlength: [3, "Name must be at least 3 characters."]
  },
  description: {
    type: String,
    required: [true, 'description is required'],
    minlength: [3, "Name must be at least 3 characters."]
  },
  skills:{
    type: [{
      type: String
    }],
    validate: [
      (val) => {return val.length <= 3},
      "Can not have more than 3 skills"
    ]
  },
  likes:{
    type: Number,
    default: 0
  }
}, {timestamps: true});
module.exports = mongoose.model('Pet1', PetSchema)
