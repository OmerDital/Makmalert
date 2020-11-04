import { Schema, model } from 'mongoose';

const user = new Schema({
  name: String,
});

export default model('User', user);
