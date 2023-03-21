export interface Leagues {
    idLeague:           string;
    idSoccerXML:        null;
    idAPIfootball:      string;
    strSport:           string;
    strLeague:          string;
    strLeagueAlternate: string;
    intDivision:        string;
    idCup:              string;
    strCurrentSeason:   string;
    intFormedYear:      string;
    dateFirstEvent:     Date;
    strGender:          string;
    strCountry:         string;
    strWebsite:         string;
    strFacebook:        string;
    strInstagram:       string;
    strTwitter:         string;
    strYoutube:         string;
    strRSS:             string;
    strDescriptionEN:   string;
    strDescriptionDE:   null;
    strDescriptionFR:   null;
    strDescriptionIT:   null;
    strDescriptionCN:   null;
    strDescriptionJP:   null;
    strDescriptionRU:   null;
    strDescriptionES:   null;
    strDescriptionPT:   null;
    strDescriptionSE:   null;
    strDescriptionNL:   null;
    strDescriptionHU:   null;
    strDescriptionNO:   null;
    strDescriptionPL:   null;
    strDescriptionIL:   null;
    strTvRights:        null;
    strFanart1:         null;
    strFanart2:         null;
    strFanart3:         null;
    strFanart4:         null;
    strBanner:          null;
    strBadge:           string;
    strLogo:            null;
    strPoster:          null;
    strTrophy:          null;
    strNaming:          string;
    strComplete:        null;
    strLocked:          string;
}
export interface TeamsProp {
    league: Team[];
}
export interface Team {
    id: string,
    name : string
}

