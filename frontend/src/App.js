import {useState, useEffect} from 'react';
import './App.css';
import { Row, Col, Image, Button} from 'antd';
import DoctorsList from './components/DoctorList';
import DoctorInfo from './components/DoctorInfo';
import PatientTable from './components/PatientTable';
import logo from './images/blue-logo-v2.svg'

function App() {
  const [doctors, setDoctors] = useState([]);
  const [currentDoctorKey, setCurrentDoctorKey] = useState('');

  const getDoctors =  async () => {
    const res = await fetch('http://localhost:3001/doctors');
    const doctors = await res.json();

    setDoctors(doctors.results.map((doc) => ({...doc, key: doc.login.uuid})));
    setCurrentDoctorKey(doctors?.results?.[0]?.login.uuid);
  }

  const onDocClick = (e) => {
    setCurrentDoctorKey(e.key)
  };

  useEffect(() => {
    getDoctors()
  }, [])

  return (
    <div className="App">
      <div className="content-wrapper">
        <Row>
          <Col span={8} style={{backgroundColor: '#f4f4f6'}}>
            <Image src={logo} preview={false} className='logo'/>
            <p className='physicians-header'>Physicians</p> 
            {doctors && currentDoctorKey ? <DoctorsList doctors={doctors} currentDoctorKey={currentDoctorKey} onDocClick={onDocClick} /> : null}
            <div className="button-wrapper">
              <Button type='primary' size='large'>Logout</Button>
            </div>
          </Col>
          <Col span={16} className='col-right'>
            {doctors && currentDoctorKey ? <DoctorInfo doctors={doctors} currentDoctorKey={currentDoctorKey} /> : null}
            {currentDoctorKey ? <PatientTable currentDoctorKey={currentDoctorKey}/> : null}
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
