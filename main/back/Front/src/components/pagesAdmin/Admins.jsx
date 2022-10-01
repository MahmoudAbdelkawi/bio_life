import React,{useEffect,useState} from 'react';
import './admins.css'
import SingleAdmin from '../admin/admin/SingleAdmin'
import { getAdmins} from '../../services/adminsServices';
import {Link} from 'react-router-dom'


const Admins = () => {
    const [admins,setAdmins]=useState([]);
    useEffect(() => {
        async function get() {
          const adminResult = await getAdmins();
          setAdmins(adminResult.data);
        
        }
        get();
      }, []);

    const adminMapping = admins.map((admin) => {
        return <SingleAdmin
        key={admin?._id}
        name={admin?.name}
        role={admin?.isAdmin?'Admin':'subAdmin'}
        id={admin?._id}
        />
    })
    return (
        <>
        <div>
            <div className='admin-title'>
            <h3>admin</h3>
            </div>
            <div className='admin-container'>
                {adminMapping}
            </div>
          
        </div>
          <div className='adding-offers'>
          <Link className='link' to='/dashboard/AddAdmin'>
              <button className='container'><p className='add-icon'>+</p></button>
          </Link>
      </div>
      </>
    );
}

export default Admins;
