const { Router } = require('express');
const {
    getPatients,
} = require('../controllers/patientController');
const patientData = require('../data/patient.json');

const router = Router();

// listen for incoming requests on these routes
router
  .route('/:id')
  .get((req, res) => {
    const id = req.params.id;
    const patients = patientData.results.filter(patient => patient.doctorUuid === id)

    res.send(patients)
  })

module.exports = router;