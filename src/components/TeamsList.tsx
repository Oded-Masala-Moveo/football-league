import React from "react";
import { TeamsProp } from "../footballLeague.model";

const TeamsList: React.FC<TeamsProp> = (props) => {
  return <div>{props.league[1]?.id}</div>;
};

export default TeamsList;
