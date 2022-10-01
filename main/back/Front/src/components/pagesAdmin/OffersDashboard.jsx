import {useEffect,useState} from 'react';
import './offers.css'
import SingleOffer from '../admin/offers/SingleOffer';
import { getOffers } from '../../services/offerServices';
import {Link} from 'react-router-dom'



function OffersDashboard () {

    const [offers, setOffers] = useState([]);
    useEffect(() => {
      async function get() {
        const reserveResult = await getOffers();
        setOffers(reserveResult.data);
      }
      get();
    }, []);
    
const offersArray = offers.map((offer)=>(

{
    id: offer._id,
    image:offer.image,
    Price :offer.price,
    title : offer.title,
    points: offer.points,
    Department: offer.department.name, 
    expireDate: new Date(offer.expiredate).toLocaleDateString()
}
));
    const offerMaping = offersArray.map((offer) => {
        return <SingleOffer 
        key={offer.id}
        id={offer.id}
        image={offer.image}
        title={offer.title}
        Price={offer.Price}
        points={offer.points}
        Department={offer.Department}
        expireDate={offer.expireDate}
        />
    })
    return (
        <div>
        <h1 className='offer-title'>العروض</h1>
        <div>
            <div className='offersContainer'>{offerMaping}</div>
        </div>
        <div className='adding-offers'>
        <Link className='link' to="/dashboard/AddFormOffer">
            <button className='container' ><p className='add-icon'>+</p></button>
        </Link>
        </div>

        </div>
    );
}

export default OffersDashboard;
