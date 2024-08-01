const express = require("express");
const router = express.Router();
const testdriveModel = require("../models/testdriveModel");
const authMiddleware = require("../middlewares/authMiddleware");
const moment = require("moment");

//update car exit
router.post("/update-car-exit", authMiddleware, async (req, res) => {
  try {
    const testdriveId = req.body.testdriveId;
    const { km_out, time_out } = req.body;

    // Update the test drive details
    const testdrive = await testdriveModel.findByIdAndUpdate(
      testdriveId,
      { km_out, time_out },
      { new: true }
    );

    if (!testdrive) {
      return res.status(404).send("Test drive not found");
    }

    res.status(200).send({
      success: true,
      message: "Test drive details updated successfully",
      data: testdrive,
    });
  } catch (error) {
    res.status(500).send("Error updating test drive details");
  }
});
//update the car entry
router.post("/update-car", authMiddleware, async (req, res) => {
  try {
    const carId = req.body.id;
    const { km_in, time_in } = req.body;
    const car = await testdriveModel.findByIdAndUpdate(carId, {
      km_in,
      time_in,
    });
    res.status(200).send({
      success: true,
      message: "Car details updated successfully",
    });
  } catch (error) {
    res.status(500).send("Error updating car details");
  }
});
module.exports = router;
