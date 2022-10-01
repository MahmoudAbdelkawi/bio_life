import React, { useState, useEffect } from "react";
import "./TeamCard.css";
import CardItem from "./CardItem";
import { getMembers } from "../../../services/membersServices";

function TeamCard() {
  const [teams, setTeams] = useState([]);
  // const PF = "https://biollife.herokuapp.com/uploads/";
  useEffect(() => {
    async function get() {
      const teamResult = await getMembers();
      setTeams(teamResult.data);
    }
    get();
  }, []);

  return (
    <>
      <div className="cards_team">
        <section className="title container">
          <div className="row">
            <div className="col-md-12">
           
          
            </div>
          </div>
        </section>

        <div className="cards__container_team">
          <div className="cards__wrapper_team">
                <div className="cards__items">
                  <ul>
                    
                  {teams?.map((team)=>(

                 
                    
                          <CardItem
                          id={team._id}
                            key={team._id}
                            // src={PF+team.image}
                            src='https://t3.ftcdn.net/jpg/02/60/04/08/360_F_260040863_fYxB1SnrzgJ9AOkcT0hoe7IEFtsPiHAD.jpg'
                            name={team.name}
                            label={team.department.name}
                            position={team.position}
                            description={team.paragraph.slice(0,20)}
                            email={team.email}
                            path={`/ProfilePage/${team._id}`}
                          />
                        
                          ))}
                    
                  </ul>
                </div>
             
           
          </div>
        </div>
      </div>
    </>
  );
}

export default TeamCard;
