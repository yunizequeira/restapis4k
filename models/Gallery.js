const mongoose = require("mongoose");
const Shema = mongoose.Schema;

const galleryShema = new Shema({
  photos: {
    type: Array,
  },
  banner: {
    type: String,
    trim: true,
  },
  day:{
    type: String,
    trim: true,
  }
});

module.exports = mongoose.model("Gallery" , galleryShema);
