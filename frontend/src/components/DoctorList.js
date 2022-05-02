import { Menu } from 'antd';

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const DoctorList = ({doctors, currentDoctorKey, onDocClick}) => {
  const testItems = doctors.map((doctor) => {
    return getItem(`${doctor.name.last}, ${doctor.name.first}`, `${doctor.login.uuid}`)
  })

  return (
    <Menu
    style={{backgroundColor: 'rgba(0, 0, 0, 0)'}}
    onClick={onDocClick}
    defaultSelectedKeys={currentDoctorKey}
    items={testItems}
    className='doctorlist'
  />

  )
}

export default DoctorList;