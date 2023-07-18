import { Schema, model, models } from 'mongoose';

const QouteSchema = new Schema({
  Creator : {
      type:  Schema.Types.ObjectId,
      ref: 'User'
},
  qoute: {
    type: String,
    unique: [true, 'qoute already exists!'],
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