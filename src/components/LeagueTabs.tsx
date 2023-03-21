import React, { useEffect, useState } from "react";
import TeamsList from "./TeamsList";
import { Leagues, Team } from "../footballLeague.model";
import { getLeagues, getTeamsLeague } from "../services/footballService";
const LeagueTabs: React.FC = () => {
  const [leagueData, setTeamsData] = useState<Leagues[]>([]);
  const [teamsData, setLeagueData] = useState<Team[]>([
    {
      id: "",
      name: "",
    },
  ]);
  const clickLeagueHandler = (leagueId: string, leagueName: string): void =>
    setLeagueData((prev) => [...prev, { id: leagueId, name: leagueName }]);

  useEffect(() => {
    async function fetchLeagues() {
      const { data: leagueData } = await getLeagues();
      setTeamsData(leagueData.countries);
    }
    fetchLeagues();
  }, []);

  return (
    <>
      <div>
        LeagueTabs
        <div className="container">
          {Array.isArray(leagueData) &&
            leagueData.length > 0 &&
            leagueData.slice(0, 5).map((league, index) => (
              <button
                key={index}
                onClick={() =>
                  clickLeagueHandler(league.idLeague, league.strLeague)
                }
              >
                {league.strLeague}
              </button>
            ))}
        </div>
        <TeamsList league={teamsData} />
      </div>
    </>
  );
};

export default LeagueTabs;
