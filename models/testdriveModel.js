const mongoose = require("mongoose");

const testdriveSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    date_of_testdrive: {
      type: Date,
      default: Date.now,
    },
    customer_name: {
      type: String,
      required: true,
    },
    customer_DL: {
      type: String,
      required: true,
    },
    customer_contact: {
      type: Number,
      required: true,
    },
    demo_no: {
      type: String,
      required: true,
    },
    vehicle_model: {
      type: String,
      required: true,
    },
    chassis_number: {
      type: String,
      required: true,
    },
    location_testdrive: {
      type: String,
      required: true,
    },
    purpose: {
      type: String,
    },
    km_out: {
      type: Number,
      default: 0,
      required: true,
    },
    km_in: {
      type: Number,
      default: 0,
      required: true,
    },
    time_out: {
      type: String,
      default: "pending",
    },
    time_in: {
      type: String,
      default: "pending",
    },
    company_name: {
      type: String,
      default: "Pratap Cars Pvt. Ltd.",
    },
    brand_name: {
      type: String,
      default: "Renault",
    },
    location: {
      type: String,
      default: "Vaishali Nagar",
    },
    status: {
      type: String,
      default: "pending",
    },
    journey: {
      type: String,
      default: "in progress",
    },
  },
  { timestamps: true }
);

const testdriveModel = mongoose.model("testdrive", testdriveSchema);

module.exports = testdriveModel;
