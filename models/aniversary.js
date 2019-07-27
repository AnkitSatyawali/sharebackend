const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AniversarySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  partnername: {
    type: String,
    required: true
  },
  partnersurname: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  date : {
    type:String,
    required:true
  },
  startTimehr : {
    type:String,
    required:true
  },
  startTimemn : {
    type:String,
    required:true
  },
  endTimehr : {
    type:String,
    required:true
  },
  endTimemn : {
    type:String,
    required:true
  },
  createdBy : {
    type: String,
    required: true
    
  },
  address : {
    type:String,
    required:true
  },
  invites : {
    users : [
       {
         id : {type:Schema.Types.ObjectId,ref:'User',required:true},
         name :{type:String,ref:'User',required:true}
       }
    ]
  },
  subevents:{
    events:[
      {
        title: {type:String,default:"Not provided"},
        date : {type:String,default:"Not provided"},
        week : {type:String,default:"Not provided"},
        venue : {type:String,default:"Not provided"},
        message : {type:String}
      }
    ]
  },
  story1:{
    type:String
  },
  story2:{
    type:String
  },
  information:{
    type:String
  },
  images:[{type:String}]
  

});

module.exports = {
  aniversary: mongoose.model('aniversary', AniversarySchema)
};
