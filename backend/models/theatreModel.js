import mongoose from 'mongoose';

const theatreSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: true``,
    },

    phone: {
      type: String,
      required: true``,
    },

    email: {
      type: String,
      required: true,
    },

    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },

    isActive: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Theatre = mongoose.model('Theatre', theatreSchema);

export default Theatre;
