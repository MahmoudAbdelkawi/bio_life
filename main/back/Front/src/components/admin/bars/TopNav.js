import '../../../App.css';
import { Link } from 'react-router-dom';
import {getCurrentUser,logout} from '../../../services/loginServices';
import { useEffect,useState } from 'react';


const TopNav = () => {
  const [user, setUser] = useState('');
  useEffect(() => {
    const user = getCurrentUser();
    setUser(user);
  },[]);

  
    return (
        <div className='topnav'>
          <h1 className="topnav-title">عيادات بايو لايف</h1>
          <h4 className="topnav-title">all rights reserved to Sari tech © 2022</h4>
        {
          !user&&(
            <Link className='topnav-title-a' to='/login'>Login</Link>
          )
        }

        {
          user&&(
            <Link className='topnav-title-a' to='/' onClick={()=>logout()} >logout</Link>
          )
        }
        </div>
    );
}

export default TopNav;