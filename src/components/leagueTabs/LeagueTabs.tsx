import React, { useEffect, useState } from "react";
import TeamsList from "../teamsList/TeamsList";
import { Leagues } from "../../footballLeague.model";
import { getLeagues } from "../../services/footballService";

const LeagueTabs: React.FC = () => {
  const [leagueData, setTeamsData] = useState<Leagues[]>([]);
  const [leagueName, setLeagueName] = useState<string>("");

  const clickLeagueHandler = (name: string): void => setLeagueName(name);

  useEffect(() => {
    async function fetchLeagues() {
      const { data: leagueData } = await getLeagues();
      setTeamsData(leagueData.leagues);
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
            leagueData.slice(0, 7).map((league, index) => (
              <button
                key={index}
                onClick={() => clickLeagueHandler(league.strLeague)}
              >
                {league.strLeague}
              </button>
            ))}
        </div>
        {leagueName.length > 0 && <TeamsList league={leagueName} />}
      </div>
    </>
  );
};

export default LeagueTabs;
