const mongoose = require('mongoose');

const languageSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    value: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true
  }
);

languageSchema.statics.findBy = (query = {}, options = {}) => {
  return new Promise((resolve, reject) => {
    const sortBy = options.sort || '-updatedAt';
    const select = options.select || '';
    const limit = parseInt(options.limit, 10) || 0;
    const skip = (parseInt(options.skip, 10) || 0) * limit;

    Promise.all([
      mongoose
        .model('Language')
        .find(query)
        .sort(sortBy)
        .limit(limit)
        .skip(skip)
        .select(select)
        .exec(),
      mongoose
        .model('Language')
        .count(query)
        .exec()
    ])
      .then(([languages, count]) => resolve({ languages, count }))
      .catch(reject);
  });
};

module.exports = mongoose.model('Language', languageSchema);
