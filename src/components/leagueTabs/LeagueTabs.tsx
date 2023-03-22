import React, { useEffect, useState } from "react";
import TeamsList from "../teamsList/TeamsList";
import { Leagues } from "../../footballLeague.model";
import { getLeagues, getTeamsInLeague } from "../../services/footballService";
import { Team } from "../../footballLeague.model";

const LeagueTabs: React.FC = () => {
  const [leagueData, setLeagueData] = useState<Leagues[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [teams, setTeams] = useState<Team[]>([]);

  const fetchTeams = async (name: string) => {
    setIsLoading(true);
    const { data } = await getTeamsInLeague(name);
    setTeams(data.teams);
    setIsLoading(false);
  };

  useEffect(() => {
    async function fetchLeagues() {
      const { data: leagueData } = await getLeagues();
      setLeagueData(leagueData.leagues);
    }
    fetchLeagues();
  }, []);

  return (
    <>
      <div className="league-container">
        {Array.isArray(leagueData) &&
          leagueData.length > 0 &&
          leagueData.slice(1, 7).map((league, index) => (
            <button key={index} onClick={() => fetchTeams(league.strLeague)}>
              {league.strLeague}
            </button>
          ))}
      </div>
      {isLoading ? (
        <div className="loading">
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <div>
          <TeamsList teamsLeague={teams} />
        </div>
      )}
    </>
  );
};

export default LeagueTabs;
