import mongoose from 'mongoose';

const schema = mongoose.Schema;

const UserSchema = new schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  birthYear: {
    type: Number,
    required: true,
  },
});

export default mongoose.model('User', UserSchema);
