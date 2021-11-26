const mongoose = require('mongoose');

const mongoosePaginate = require('mongoose-paginate');

const userSchema = new mongoose.Schema({
  fio: {type: String, required: true},
  telephone: String,
  adress: {type: String, required: true},
  fias: {type: String, required: true},
  _id: mongoose.Schema.Types.ObjectId,
  date: Date,
  deleted: {type : Boolean, default: false}
});

userSchema.plugin(mongoosePaginate);
userSchema.index({fio: 'text'}, { default_language: 'russian' });

module.exports = mongoose.model('User', userSchema);