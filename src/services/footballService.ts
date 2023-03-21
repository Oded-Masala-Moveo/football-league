import axios from "axios";

export const getLeagues = async () =>{
    const res = await axios.get("https://www.thesportsdb.com/api/v1/json/3/search_all_leagues.php?c=Spain&s=Soccer")   
    return res
}

export const getTeamsLeague = async () =>{
    const res = await axios.get("https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?s=Soccer&c=Spain")   
    return res 
}