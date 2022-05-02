const { Router } = require('express');
const {
    getDoctors,
} = require('../controllers/doctorController');
const doctorData = require('../data/doctors.json');
const router = Router();

// listen for incoming requests on these routes
router
  .route('')
  .get((req, res) => {
    res.json(doctorData)
  })

module.exports = router;