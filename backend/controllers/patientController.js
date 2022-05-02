const patientData = require('../data/patient.json');

const getPatients = (req, res, next) => {
  const { id } = req.query;

  const patients = patientData.results.filter(patient => patient.doctorUuid === id)

    res.status(200).send(patients)
};

module.exports = {
    getPatients,
};
