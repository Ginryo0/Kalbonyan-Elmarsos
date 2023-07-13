import mongoose from 'mongoose';

const schema = mongoose.Schema;

const NoteSchema = new schema(
  {
    note: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
    author: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

export default mongoose.model('Note', NoteSchema);
