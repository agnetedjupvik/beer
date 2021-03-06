import mongoose from 'mongoose';

const BeerSchema = new mongoose.Schema({
  name:       String,
  brewery:    String,
  size:       Number,
  alcoholic:  Boolean,
});

module.exports = mongoose.model('Beer', BeerSchema);
