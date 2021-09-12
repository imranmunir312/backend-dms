const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title of the Course is required"],
  },
  code: {
    type: String,
    required: [true, "Course Code is required"],
  },
  creditHours: {
    type: Number,
    required: [true, "Credit Hour is Required"],
  },
  prerequisites: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
  category: {
    type: String,
    enum: ["General", "Elective", "Core"],
    required: [true, "Course Category is required"],
  },
});

courseSchema.pre(/^find/, function (next) {
  this.populate("prerequisites");
  next();
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
