import {useState,useEffect} from 'react';
import './employee.css'
import SingleEmployee from '../admin/employee/SingleEmployee';
import { getMembers } from '../../services/teamServices';
import {Link} from 'react-router-dom'
  

function Employees () {
    const [members, setMembers] = useState([]);
    useEffect(() => {
      async function get() {
        const departmentResult = await getMembers();
        setMembers(departmentResult.data);
      }
      get();
    }, []);
    

const employeesArray = members.map((member)=>(

{
    id:member?._id,
    name: member?.name,
    image:member?.image,
    email : member?.email,
    position : member?.position,
    paragraph:member?.paragraph,
    Department: member?.department.name, 
    fromTime : member?.fromTime ,
    toTime:member?.toTime,
    fromDay : member?.fromDay ,
    toDay:member?.toDay
}))

    const employeesMaping = employeesArray.map((employee) => {
        return <SingleEmployee 
        key={employee.id}
        id={employee.id}
        image={employee.image}
        name={employee.name}
        email={employee.email}
        position={employee.position}
        Department={employee.Department}
        paragraph={employee.paragraph}
        fromTime ={ employee.fromTime}
        toTime={employee.toTime}
        fromDay ={ employee.fromDay}
        toDay={employee.toDay}
        />
    })
    return (
        <div>
        <h1 className='Emp-title'>الموظفين</h1>
        <div>
            <div className='EmpContainer'>{employeesMaping}</div>
        </div>
        <div className='adding-Emp'>
        <Link className='link' to="/dashboard/AddFormEmployee">
            <button className='container' ><p className='add-icon'>+</p></button>
        </Link>
        </div>

        </div>
    );
}

export default Employees;
