const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    registrationNumber: {
      type: String,
      required: [true, "Registration number is required"],
      min: 6,
      max: 20,
    },
    batch: {
      type: String,
      required: [true, "Batch is required"],
    },
    courses: [
      new mongoose.Schema({
        status: {
          type: String,
          enum: ["fail", "pass", "in progress"],
          required: true,
        },
        course: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Course",
          required: true,
        },
      }),
    ],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// studentSchema.virtual("passedCreditHours").get(function () {
//   return this.attemptedCreditHours - this.failedCreditHours;
// });

const Student = mongoose.model("student", studentSchema);

module.exports = Student;
