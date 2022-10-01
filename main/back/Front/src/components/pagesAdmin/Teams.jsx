
import "./teams.css";
import { useEffect, useState } from "react";
import { getTeams} from "../../services/teamServices";

function Teams() {
  const [teams, setTeams] = useState([]);
  const PF = "https://biollife.herokuapp.com/uploads/";
  useEffect(() => {
    async function get() {
      const teamsResult = await getTeams();
      setTeams(teamsResult.data);
    }
    get();
  }, []);
 

  return (
    <div className="teams">
    {teams.map((team)=>(
      <>
      <h1 className="h1-teams-logo" key={Math.floor(100000 + Math.random() * 900000)}>{team[0].department.name}</h1>
      <div className="TeamsContainer">
      {team.map((member)=>(

      <div key={member._id} className="TeamCard">
      <div className="TeamCardIcon">
      <img src={PF+member.image} className="TeamImage" alt="member"/>
      </div>
      <hr />

      <div className="TeamCardInfo">
        <h4>{member.name}</h4>
        <h4>{member.department.name}</h4>
      </div>
    </div>
    ))}
      </div>
      </>
    ))}
     
    </div>
  );
}

export default Teams;
