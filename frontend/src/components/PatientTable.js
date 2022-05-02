import {useState, useEffect} from 'react';
import { Table} from 'antd';
import * as dayjs from 'dayjs'

const columns = [
  {
    title: '#',
    dataIndex: 'key',
    key: 'key',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Time',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Kind',
    dataIndex: 'appointmentType',
    key: 'appointmentType',
  },
];

const PatientTable = ({currentDoctorKey}) => {
  let dataSource = [];
  const [patientList, setPatientList] = useState()
  const getPatients =  async () => {
    const res = await fetch(`http://localhost:3001/patients/${currentDoctorKey}`);
    const patients = await res.json();

    setPatientList(patients);
  }

  useEffect(() => {
    getPatients()
  },[currentDoctorKey])

  if(patientList) {
    dataSource = patientList.map((patient, index) => {
      return (
        {
          key: index + 1,
          name: `${patient.name.first} ${patient.name.last}`,
          age: dayjs(`${patient.dob.date}`).format('h:mm a'),
          appointmentType: `${patient.appointment.type}`,
        }
      )
    })
  }
  
  return <Table columns={columns} dataSource={dataSource} pagination={false}/>
} 

export default PatientTable;