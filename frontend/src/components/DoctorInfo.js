const DoctorInfo = ({doctors, currentDoctorKey}) => {
    const doctor = doctors.find(doc => doc.key === currentDoctorKey);

    return (
      <section className="doctorInfo">
        <h2 className="doctor-name" data-testid="doctor-name">Dr. {doctor.name.first} {doctor.name.last}</h2>
        <p className="doctor-email">{doctor.email}</p>
      </section>
    )
}

export default DoctorInfo;