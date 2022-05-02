import DoctorInfo from "./DoctorInfo";
import {render,screen} from '@testing-library/react';

const doctors = [
  {
    "gender": "male",
    "key": "3e14af48-ba08-4cc3-b1db-0f6fee77ec0c",
    "name": {
      "title": "Mr",
      "first": "Cory",
      "last": "Sullivan"
    },
    "location": {
        "street": {
            "number": 2777,
            "name": "Preston Rd"
        },
        "city": "York",
        "state": "Indiana",
        "country": "United States",
        "postcode": 57301,
        "coordinates": {
            "latitude": "-7.1988",
            "longitude": "-60.3868"
        },
        "timezone": {
            "offset": "-10:00",
            "description": "Hawaii"
        }
    },
    "email": "cory.sullivan@example.com",
    "login": {
        "uuid": "3e14af48-ba08-4cc3-b1db-0f6fee77ec0c",
        "username": "ticklishpanda105",
        "password": "alabama",
        "salt": "SNaFUVm0",
        "md5": "9c13903fedeaf6414b426d24a3c99a6e",
        "sha1": "8f0397f90c4db83c7fd025b615a6adb5a84fec49",
        "sha256": "a2fc3f4215e9e8a00ac4eaa03943abffe829b9c38b6b00dd66980bad3bdc0bfd"
    },
    "dob": {
        "date": "1998-03-14T11:35:12.863Z",
        "age": 24
    },
    "registered": {
        "date": "2008-11-21T10:04:53.300Z",
        "age": 14
    },
    "phone": "(994)-497-0731",
    "cell": "(619)-362-0575",
    "id": {
        "name": "SSN",
        "value": "276-21-4070"
    },
    "picture": {
        "large": "https://randomuser.me/api/portraits/men/99.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/99.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/99.jpg"
    },
    "nat": "US"
  }
]
describe('DoctorInfo Component', () => {
  it('has the correct test id attached to component', () => {
    render(<DoctorInfo doctors={doctors} currentDoctorKey='3e14af48-ba08-4cc3-b1db-0f6fee77ec0c' />);
    expect(screen.getByTestId('doctor-name')).toBeInTheDocument();
  });
  it('renders a doctor name and email', () => {
    render(<DoctorInfo doctors={doctors} currentDoctorKey='3e14af48-ba08-4cc3-b1db-0f6fee77ec0c' />);
    expect(screen.getByText('Dr. Cory Sullivan')).toBeInTheDocument();
    expect(screen.getByText('cory.sullivan@example.com')).toBeInTheDocument();
  });
});