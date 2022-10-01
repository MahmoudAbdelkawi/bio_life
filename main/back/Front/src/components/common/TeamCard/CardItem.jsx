import React from 'react';
import { Link} from 'react-router-dom';

function CardItem(props) {

 
  return (
    <>
       <li className='cards__item_team'>
        <Link className='cards__item__link_team' to={props.path}>

          <figure className='cards__item__pic-wrap_team' data-category={props.label}>
            <img
              className='cards__item__img_team'
              alt=''
              src={props.src}
            />
          </figure>
          <div className='cards__item__info_team'>
            <h3 className='cards__item__text_team'>{props.name}</h3>
           
            <h5 className='cards__item__text_team'>{props.postion}</h5>
            <h5 className='cards__item__text_team'>{props.description}
            <br></br>
            <a href={`/ProfilePage/${props.id}`} style={{color:'#1f3d9d'}}>اقرأ المزيد
            </a>
            </h5>
            <h5 className='cards__item__text_team'>{props.email}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;