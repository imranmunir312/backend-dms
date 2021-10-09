const mongoose = require("mongoose");

const OfferingsSchema = new mongoose.Schema({
  semester: {
    type: String,
    required: [true, "Semster is required"],
  },
  batch: {
    type: String,
    required: [true, "batch is required"],
  },
  degree: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "Degree is required"],
    ref: "Degree",
  },
  courses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "Offering is required"],
      unique: [true, "Course already offered"],
      ref: "Course",
    },
  ],
});

OfferingsSchema.pre(/^find/, function (next) {
  this.populate({
    path: "degree",
    select: "title",
  }).populate({
    path: "courses",
  });

  next();
});

const Offerings = mongoose.model("Offerings", OfferingsSchema);

module.exports = Offerings;
