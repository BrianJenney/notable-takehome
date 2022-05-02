const doctorData = require('../data/doctors.json');

const getDoctors = (req, res, next) => {

    res.status(200).res.json(doctorData)
};



module.exports = {
    getDoctors,
};
