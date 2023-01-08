import mongoose from 'mongoose';

const VideoSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Categories',
  },
});

export default mongoose.model('Videos', VideoSchema);
