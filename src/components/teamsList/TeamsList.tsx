import React, { useEffect, useState } from "react";
import { TeamsProp, Team } from "../../footballLeague.model";
import { getTeamsInLeague } from "../../services/footballService";
const TeamsList: React.FC<TeamsProp> = (props) => {
  const [teams, setTeams] = useState<Team[]>([]);
  useEffect(() => {
    const fetchTeamsTest = async () => {
      const { data } = await getTeamsInLeague(props.league);
      setTeams(data.teams);
    };
    fetchTeamsTest();
  }, [props.league]);
  return (
    <div>
      <ul>
        {teams.map((team) => (
          <li>
            <div>
              <img src={team.strTeamBadge} alt="" />
            </div>
            {team.strTeam}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamsList;
