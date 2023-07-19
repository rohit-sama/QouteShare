import { Schema, model, models } from 'mongoose';
import User from './user';

const QouteSchema = new Schema({
  Creator : {
      type:  Schema.Types.ObjectId,
      ref: 'User',
},
  qoute: {
    type: String,
    required: [true, 'qoute is required!'],
  },
  image:{
    type: String,
  },
  tag:{
    type: String,
    required: [true, 'Tag is required']
  }
});

const Qoute = models.Qoute || model("Qoute", QouteSchema);

export default Qoute;