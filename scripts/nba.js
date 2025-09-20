const DEFAULT_PENALTY = 5;
const STORAGE_KEY = 'nbaDrinkingGameState';

const PLAYER_POOL = [
    {
        name: 'Trae Young',
        team: 'Atlanta Hawks',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612737/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629027.png',
        position: 'Point Guard',
        draftYear: 2018,
        jersey: 11,
        stats: { pts: 26.2, reb: 2.9, ast: 10.8 },
    },
    {
        name: 'Dejounte Murray',
        team: 'Atlanta Hawks',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612737/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1627749.png',
        position: 'Guard',
        draftYear: 2016,
        jersey: 5,
        stats: { pts: 22.5, reb: 5.3, ast: 6.4 },
    },
    {
        name: 'Bogdan Bogdanović',
        team: 'Atlanta Hawks',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612737/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203992.png',
        position: 'Guard',
        draftYear: 2014,
        jersey: 13,
        stats: { pts: 16.7, reb: 3.4, ast: 3.0 },
    },
    {
        name: 'De\'Andre Hunter',
        team: 'Atlanta Hawks',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612737/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629631.png',
        position: 'Forward',
        draftYear: 2019,
        jersey: 12,
        stats: { pts: 15.4, reb: 3.9, ast: 1.4 },
    },
    {
        name: 'Clint Capela',
        team: 'Atlanta Hawks',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612737/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203991.png',
        position: 'Center',
        draftYear: 2014,
        jersey: 15,
        stats: { pts: 11.4, reb: 10.8, ast: 1.2 },
    },
    {
        name: 'Jayson Tatum',
        team: 'Boston Celtics',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612738/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628369.png',
        position: 'Forward',
        draftYear: 2017,
        jersey: 0,
        stats: { pts: 26.9, reb: 8.1, ast: 4.9 },
    },
    {
        name: 'Jaylen Brown',
        team: 'Boston Celtics',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612738/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1627759.png',
        position: 'Wing',
        draftYear: 2016,
        jersey: 7,
        stats: { pts: 23.1, reb: 5.5, ast: 3.6 },
    },
    {
        name: 'Kristaps Porziņģis',
        team: 'Boston Celtics',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612738/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/204001.png',
        position: 'Forward-Center',
        draftYear: 2015,
        jersey: 8,
        stats: { pts: 20.1, reb: 7.2, ast: 2.0 },
    },
    {
        name: 'Jrue Holiday',
        team: 'Boston Celtics',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612738/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201950.png',
        position: 'Guard',
        draftYear: 2009,
        jersey: 4,
        stats: { pts: 17.6, reb: 4.4, ast: 7.1 },
    },
    {
        name: 'Derrick White',
        team: 'Boston Celtics',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612738/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628401.png',
        position: 'Guard',
        draftYear: 2017,
        jersey: 9,
        stats: { pts: 15.2, reb: 4.2, ast: 4.7 },
    },
    {
        name: 'Mikal Bridges',
        team: 'Brooklyn Nets',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612751/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628969.png',
        position: 'Forward',
        draftYear: 2018,
        jersey: 1,
        stats: { pts: 19.7, reb: 4.5, ast: 3.6 },
    },
    {
        name: 'Cameron Johnson',
        team: 'Brooklyn Nets',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612751/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629661.png',
        position: 'Forward',
        draftYear: 2019,
        jersey: 2,
        stats: { pts: 13.6, reb: 4.5, ast: 2.4 },
    },
    {
        name: 'Nicolas Claxton',
        team: 'Brooklyn Nets',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612751/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629651.png',
        position: 'Center',
        draftYear: 2019,
        jersey: 33,
        stats: { pts: 12.0, reb: 10.1, ast: 1.9 },
    },
    {
        name: 'Ben Simmons',
        team: 'Brooklyn Nets',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612751/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1627732.png',
        position: 'Guard-Forward',
        draftYear: 2016,
        jersey: 10,
        stats: { pts: 6.9, reb: 6.3, ast: 6.1 },
    },
    {
        name: 'Dorian Finney-Smith',
        team: 'Brooklyn Nets',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612751/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1627827.png',
        position: 'Forward',
        draftYear: 2016,
        jersey: 28,
        stats: { pts: 8.5, reb: 4.7, ast: 1.5 },
    },
    {
        name: 'LaMelo Ball',
        team: 'Charlotte Hornets',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612766/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630163.png',
        position: 'Guard',
        draftYear: 2020,
        jersey: 1,
        stats: { pts: 23.9, reb: 5.1, ast: 8.6 },
    },
    {
        name: 'Terry Rozier',
        team: 'Charlotte Hornets',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612766/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1626179.png',
        position: 'Guard',
        draftYear: 2015,
        jersey: 3,
        stats: { pts: 23.2, reb: 3.9, ast: 6.6 },
    },
    {
        name: 'Miles Bridges',
        team: 'Charlotte Hornets',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612766/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628970.png',
        position: 'Forward',
        draftYear: 2018,
        jersey: 0,
        stats: { pts: 21.0, reb: 7.1, ast: 3.4 },
    },
    {
        name: 'Gordon Hayward',
        team: 'Charlotte Hornets',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612766/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201143.png',
        position: 'Forward',
        draftYear: 2010,
        jersey: 20,
        stats: { pts: 14.5, reb: 4.3, ast: 4.6 },
    },
    {
        name: 'P.J. Washington',
        team: 'Charlotte Hornets',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612766/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629023.png',
        position: 'Forward',
        draftYear: 2019,
        jersey: 25,
        stats: { pts: 13.0, reb: 5.5, ast: 2.2 },
    },
    {
        name: 'Zach LaVine',
        team: 'Chicago Bulls',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612741/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203897.png',
        position: 'Guard',
        draftYear: 2014,
        jersey: 8,
        stats: { pts: 24.5, reb: 4.5, ast: 4.2 },
    },
    {
        name: 'DeMar DeRozan',
        team: 'Chicago Bulls',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612741/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201942.png',
        position: 'Forward',
        draftYear: 2009,
        jersey: 11,
        stats: { pts: 24.0, reb: 4.6, ast: 5.3 },
    },
    {
        name: 'Nikola Vučević',
        team: 'Chicago Bulls',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612741/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/202696.png',
        position: 'Center',
        draftYear: 2011,
        jersey: 9,
        stats: { pts: 18.0, reb: 10.8, ast: 3.4 },
    },
    {
        name: 'Coby White',
        team: 'Chicago Bulls',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612741/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629632.png',
        position: 'Guard',
        draftYear: 2019,
        jersey: 0,
        stats: { pts: 19.1, reb: 4.5, ast: 5.1 },
    },
    {
        name: 'Alex Caruso',
        team: 'Chicago Bulls',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612741/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1627936.png',
        position: 'Guard',
        draftYear: 2016,
        jersey: 6,
        stats: { pts: 9.5, reb: 3.8, ast: 2.9 },
    },
    {
        name: 'Donovan Mitchell',
        team: 'Cleveland Cavaliers',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612739/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628378.png',
        position: 'Guard',
        draftYear: 2017,
        jersey: 45,
        stats: { pts: 27.5, reb: 5.3, ast: 6.1 },
    },
    {
        name: 'Darius Garland',
        team: 'Cleveland Cavaliers',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612739/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629636.png',
        position: 'Guard',
        draftYear: 2019,
        jersey: 10,
        stats: { pts: 20.6, reb: 2.7, ast: 6.7 },
    },
    {
        name: 'Evan Mobley',
        team: 'Cleveland Cavaliers',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612739/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630596.png',
        position: 'Forward-Center',
        draftYear: 2021,
        jersey: 4,
        stats: { pts: 16.0, reb: 9.8, ast: 2.7 },
    },
    {
        name: 'Jarrett Allen',
        team: 'Cleveland Cavaliers',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612739/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628386.png',
        position: 'Center',
        draftYear: 2017,
        jersey: 31,
        stats: { pts: 16.5, reb: 10.7, ast: 2.6 },
    },
    {
        name: 'Max Strus',
        team: 'Cleveland Cavaliers',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612739/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629624.png',
        position: 'Guard-Forward',
        draftYear: 2019,
        jersey: 1,
        stats: { pts: 12.0, reb: 4.9, ast: 3.6 },
    },
    {
        name: 'Luka Dončić',
        team: 'Dallas Mavericks',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612742/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629029.png',
        position: 'Guard',
        draftYear: 2018,
        jersey: 77,
        stats: { pts: 33.9, reb: 9.2, ast: 9.8 },
    },
    {
        name: 'Kyrie Irving',
        team: 'Dallas Mavericks',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612742/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/202681.png',
        position: 'Guard',
        draftYear: 2011,
        jersey: 11,
        stats: { pts: 25.2, reb: 5.0, ast: 5.2 },
    },
    {
        name: 'Tim Hardaway Jr.',
        team: 'Dallas Mavericks',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612742/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203501.png',
        position: 'Guard-Forward',
        draftYear: 2013,
        jersey: 10,
        stats: { pts: 16.8, reb: 3.7, ast: 1.9 },
    },
    {
        name: 'Derrick Jones Jr.',
        team: 'Dallas Mavericks',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612742/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1627884.png',
        position: 'Forward',
        draftYear: 2016,
        jersey: 55,
        stats: { pts: 8.6, reb: 3.3, ast: 1.0 },
    },
    {
        name: 'Maxi Kleber',
        team: 'Dallas Mavericks',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612742/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628467.png',
        position: 'Forward-Center',
        draftYear: 2014,
        jersey: 42,
        stats: { pts: 5.5, reb: 3.7, ast: 1.5 },
    },
    {
        name: 'Nikola Jokić',
        team: 'Denver Nuggets',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612743/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203999.png',
        position: 'Center',
        draftYear: 2014,
        jersey: 15,
        stats: { pts: 26.4, reb: 12.4, ast: 9.0 },
    },
    {
        name: 'Jamal Murray',
        team: 'Denver Nuggets',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612743/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1627750.png',
        position: 'Guard',
        draftYear: 2016,
        jersey: 27,
        stats: { pts: 21.9, reb: 4.3, ast: 6.5 },
    },
    {
        name: 'Michael Porter Jr.',
        team: 'Denver Nuggets',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612743/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629008.png',
        position: 'Forward',
        draftYear: 2018,
        jersey: 1,
        stats: { pts: 17.4, reb: 6.5, ast: 1.5 },
    },
    {
        name: 'Aaron Gordon',
        team: 'Denver Nuggets',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612743/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203932.png',
        position: 'Forward',
        draftYear: 2014,
        jersey: 50,
        stats: { pts: 13.9, reb: 6.2, ast: 3.2 },
    },
    {
        name: 'Kentavious Caldwell-Pope',
        team: 'Denver Nuggets',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612743/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203484.png',
        position: 'Guard',
        draftYear: 2013,
        jersey: 5,
        stats: { pts: 10.1, reb: 2.8, ast: 2.4 },
    },
    {
        name: 'Cade Cunningham',
        team: 'Detroit Pistons',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612765/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630595.png',
        position: 'Guard',
        draftYear: 2021,
        jersey: 2,
        stats: { pts: 22.7, reb: 4.3, ast: 7.5 },
    },
    {
        name: 'Jaden Ivey',
        team: 'Detroit Pistons',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612765/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1631093.png',
        position: 'Guard',
        draftYear: 2022,
        jersey: 23,
        stats: { pts: 15.3, reb: 3.5, ast: 3.8 },
    },
    {
        name: 'Bojan Bogdanović',
        team: 'Detroit Pistons',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612765/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/202711.png',
        position: 'Forward',
        draftYear: 2011,
        jersey: 44,
        stats: { pts: 19.2, reb: 3.4, ast: 2.6 },
    },
    {
        name: 'Isaiah Stewart',
        team: 'Detroit Pistons',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612765/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630191.png',
        position: 'Forward-Center',
        draftYear: 2020,
        jersey: 28,
        stats: { pts: 11.0, reb: 6.6, ast: 1.3 },
    },
    {
        name: 'Jalen Duren',
        team: 'Detroit Pistons',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612765/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1631105.png',
        position: 'Center',
        draftYear: 2022,
        jersey: 0,
        stats: { pts: 13.8, reb: 11.6, ast: 2.0 },
    },
    {
        name: 'Stephen Curry',
        team: 'Golden State Warriors',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612744/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201939.png',
        position: 'Guard',
        draftYear: 2009,
        jersey: 30,
        stats: { pts: 29.0, reb: 4.7, ast: 6.4 },
    },
    {
        name: 'Klay Thompson',
        team: 'Golden State Warriors',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612744/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/202691.png',
        position: 'Guard',
        draftYear: 2011,
        jersey: 11,
        stats: { pts: 18.5, reb: 3.7, ast: 2.3 },
    },
    {
        name: 'Draymond Green',
        team: 'Golden State Warriors',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612744/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203110.png',
        position: 'Forward',
        draftYear: 2012,
        jersey: 23,
        stats: { pts: 8.7, reb: 7.3, ast: 6.0 },
    },
    {
        name: 'Andrew Wiggins',
        team: 'Golden State Warriors',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612744/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203952.png',
        position: 'Forward',
        draftYear: 2014,
        jersey: 22,
        stats: { pts: 17.1, reb: 4.5, ast: 2.3 },
    },
    {
        name: 'Chris Paul',
        team: 'Golden State Warriors',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612744/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/101108.png',
        position: 'Guard',
        draftYear: 2005,
        jersey: 3,
        stats: { pts: 14.0, reb: 4.1, ast: 9.2 },
    },
    {
        name: 'Alperen Şengün',
        team: 'Houston Rockets',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612745/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630578.png',
        position: 'Center',
        draftYear: 2021,
        jersey: 28,
        stats: { pts: 21.1, reb: 9.3, ast: 5.0 },
    },
    {
        name: 'Fred VanVleet',
        team: 'Houston Rockets',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612745/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1627832.png',
        position: 'Guard',
        draftYear: 2016,
        jersey: 5,
        stats: { pts: 17.5, reb: 3.8, ast: 8.1 },
    },
    {
        name: 'Dillon Brooks',
        team: 'Houston Rockets',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612745/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628415.png',
        position: 'Forward',
        draftYear: 2017,
        jersey: 9,
        stats: { pts: 13.5, reb: 3.5, ast: 1.7 },
    },
    {
        name: 'Jalen Green',
        team: 'Houston Rockets',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612745/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630224.png',
        position: 'Guard',
        draftYear: 2021,
        jersey: 4,
        stats: { pts: 19.6, reb: 4.2, ast: 3.5 },
    },
    {
        name: 'Jabari Smith Jr.',
        team: 'Houston Rockets',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612745/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1631099.png',
        position: 'Forward',
        draftYear: 2022,
        jersey: 10,
        stats: { pts: 13.7, reb: 8.3, ast: 1.6 },
    },
    {
        name: 'Tyrese Haliburton',
        team: 'Indiana Pacers',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612754/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630169.png',
        position: 'Guard',
        draftYear: 2020,
        jersey: 0,
        stats: { pts: 20.1, reb: 3.9, ast: 11.1 },
    },
    {
        name: 'Pascal Siakam',
        team: 'Indiana Pacers',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612754/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1627783.png',
        position: 'Forward',
        draftYear: 2016,
        jersey: 43,
        stats: { pts: 21.4, reb: 7.4, ast: 5.0 },
    },
    {
        name: 'Myles Turner',
        team: 'Indiana Pacers',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612754/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1626167.png',
        position: 'Center',
        draftYear: 2015,
        jersey: 33,
        stats: { pts: 17.5, reb: 7.0, ast: 1.4 },
    },
    {
        name: 'Buddy Hield',
        team: 'Indiana Pacers',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612754/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1627741.png',
        position: 'Guard',
        draftYear: 2016,
        jersey: 7,
        stats: { pts: 15.8, reb: 4.2, ast: 2.8 },
    },
    {
        name: 'Aaron Nesmith',
        team: 'Indiana Pacers',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612754/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630174.png',
        position: 'Forward',
        draftYear: 2020,
        jersey: 23,
        stats: { pts: 12.2, reb: 3.8, ast: 1.5 },
    },
    {
        name: 'Kawhi Leonard',
        team: 'LA Clippers',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612746/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/202695.png',
        position: 'Forward',
        draftYear: 2011,
        jersey: 2,
        stats: { pts: 24.7, reb: 6.4, ast: 3.8 },
    },
    {
        name: 'Paul George',
        team: 'LA Clippers',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612746/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/202331.png',
        position: 'Guard-Forward',
        draftYear: 2010,
        jersey: 13,
        stats: { pts: 23.8, reb: 6.0, ast: 5.1 },
    },
    {
        name: 'James Harden',
        team: 'LA Clippers',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612746/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201935.png',
        position: 'Guard',
        draftYear: 2009,
        jersey: 1,
        stats: { pts: 17.0, reb: 5.5, ast: 8.0 },
    },
    {
        name: 'Russell Westbrook',
        team: 'LA Clippers',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612746/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201566.png',
        position: 'Guard',
        draftYear: 2008,
        jersey: 0,
        stats: { pts: 12.6, reb: 5.6, ast: 7.4 },
    },
    {
        name: 'Ivica Zubac',
        team: 'LA Clippers',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612746/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1627826.png',
        position: 'Center',
        draftYear: 2016,
        jersey: 40,
        stats: { pts: 11.7, reb: 9.5, ast: 1.3 },
    },
    {
        name: 'LeBron James',
        team: 'Los Angeles Lakers',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612747/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png',
        position: 'Forward',
        draftYear: 2003,
        jersey: 23,
        stats: { pts: 25.7, reb: 7.3, ast: 7.3 },
    },
    {
        name: 'Anthony Davis',
        team: 'Los Angeles Lakers',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612747/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203076.png',
        position: 'Forward-Center',
        draftYear: 2012,
        jersey: 3,
        stats: { pts: 24.4, reb: 12.6, ast: 3.5 },
    },
    {
        name: 'D\'Angelo Russell',
        team: 'Los Angeles Lakers',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612747/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203081.png',
        position: 'Guard',
        draftYear: 2015,
        jersey: 1,
        stats: { pts: 18.0, reb: 3.3, ast: 6.3 },
    },
    {
        name: 'Austin Reaves',
        team: 'Los Angeles Lakers',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612747/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630559.png',
        position: 'Guard',
        draftYear: 2021,
        jersey: 15,
        stats: { pts: 15.1, reb: 4.3, ast: 5.2 },
    },
    {
        name: 'Rui Hachimura',
        team: 'Los Angeles Lakers',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612747/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629060.png',
        position: 'Forward',
        draftYear: 2019,
        jersey: 28,
        stats: { pts: 12.7, reb: 4.5, ast: 1.2 },
    },
    {
        name: 'Ja Morant',
        team: 'Memphis Grizzlies',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612763/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630160.png',
        position: 'Guard',
        draftYear: 2019,
        jersey: 12,
        stats: { pts: 26.2, reb: 5.0, ast: 8.0 },
    },
    {
        name: 'Desmond Bane',
        team: 'Memphis Grizzlies',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612763/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630217.png',
        position: 'Guard',
        draftYear: 2020,
        jersey: 22,
        stats: { pts: 23.7, reb: 4.4, ast: 5.5 },
    },
    {
        name: 'Jaren Jackson Jr.',
        team: 'Memphis Grizzlies',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612763/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628991.png',
        position: 'Forward-Center',
        draftYear: 2018,
        jersey: 13,
        stats: { pts: 21.2, reb: 5.5, ast: 1.6 },
    },
    {
        name: 'Marcus Smart',
        team: 'Memphis Grizzlies',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612763/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203935.png',
        position: 'Guard',
        draftYear: 2014,
        jersey: 36,
        stats: { pts: 14.5, reb: 3.3, ast: 5.3 },
    },
    {
        name: 'Steven Adams',
        team: 'Memphis Grizzlies',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612763/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203500.png',
        position: 'Center',
        draftYear: 2013,
        jersey: 4,
        stats: { pts: 11.5, reb: 11.0, ast: 2.3 },
    },
    {
        name: 'Jimmy Butler',
        team: 'Miami Heat',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612748/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/202710.png',
        position: 'Forward',
        draftYear: 2011,
        jersey: 22,
        stats: { pts: 22.0, reb: 5.9, ast: 5.3 },
    },
    {
        name: 'Bam Adebayo',
        team: 'Miami Heat',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612748/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628389.png',
        position: 'Center',
        draftYear: 2017,
        jersey: 13,
        stats: { pts: 20.6, reb: 10.4, ast: 4.5 },
    },
    {
        name: 'Tyler Herro',
        team: 'Miami Heat',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612748/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629639.png',
        position: 'Guard',
        draftYear: 2019,
        jersey: 14,
        stats: { pts: 21.5, reb: 5.4, ast: 4.3 },
    },
    {
        name: 'Caleb Martin',
        team: 'Miami Heat',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612748/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628997.png',
        position: 'Forward',
        draftYear: 2019,
        jersey: 16,
        stats: { pts: 9.6, reb: 4.1, ast: 1.6 },
    },
    {
        name: 'Duncan Robinson',
        team: 'Miami Heat',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612748/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629139.png',
        position: 'Guard-Forward',
        draftYear: 2018,
        jersey: 55,
        stats: { pts: 12.5, reb: 2.5, ast: 2.9 },
    },
    {
        name: 'Giannis Antetokounmpo',
        team: 'Milwaukee Bucks',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612749/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203507.png',
        position: 'Forward',
        draftYear: 2013,
        jersey: 34,
        stats: { pts: 30.4, reb: 11.5, ast: 6.5 },
    },
    {
        name: 'Damian Lillard',
        team: 'Milwaukee Bucks',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612749/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201568.png',
        position: 'Guard',
        draftYear: 2012,
        jersey: 0,
        stats: { pts: 24.6, reb: 4.1, ast: 7.5 },
    },
    {
        name: 'Khris Middleton',
        team: 'Milwaukee Bucks',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612749/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203114.png',
        position: 'Forward',
        draftYear: 2012,
        jersey: 22,
        stats: { pts: 15.1, reb: 4.8, ast: 4.5 },
    },
    {
        name: 'Brook Lopez',
        team: 'Milwaukee Bucks',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612749/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201572.png',
        position: 'Center',
        draftYear: 2008,
        jersey: 11,
        stats: { pts: 12.5, reb: 5.2, ast: 1.6 },
    },
    {
        name: 'Bobby Portis',
        team: 'Milwaukee Bucks',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612749/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1626171.png',
        position: 'Forward',
        draftYear: 2015,
        jersey: 9,
        stats: { pts: 13.8, reb: 7.4, ast: 1.3 },
    },
    {
        name: 'Anthony Edwards',
        team: 'Minnesota Timberwolves',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612750/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630162.png',
        position: 'Guard',
        draftYear: 2020,
        jersey: 5,
        stats: { pts: 26.6, reb: 5.5, ast: 5.2 },
    },
    {
        name: 'Karl-Anthony Towns',
        team: 'Minnesota Timberwolves',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612750/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1626157.png',
        position: 'Center',
        draftYear: 2015,
        jersey: 32,
        stats: { pts: 22.3, reb: 8.4, ast: 3.0 },
    },
    {
        name: 'Rudy Gobert',
        team: 'Minnesota Timberwolves',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612750/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203497.png',
        position: 'Center',
        draftYear: 2013,
        jersey: 27,
        stats: { pts: 13.4, reb: 12.8, ast: 1.3 },
    },
    {
        name: 'Mike Conley',
        team: 'Minnesota Timberwolves',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612750/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201144.png',
        position: 'Guard',
        draftYear: 2007,
        jersey: 10,
        stats: { pts: 10.9, reb: 2.9, ast: 6.4 },
    },
    {
        name: 'Jaden McDaniels',
        team: 'Minnesota Timberwolves',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612750/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630183.png',
        position: 'Forward',
        draftYear: 2020,
        jersey: 3,
        stats: { pts: 11.4, reb: 4.2, ast: 1.6 },
    },
    {
        name: 'Zion Williamson',
        team: 'New Orleans Pelicans',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612740/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629627.png',
        position: 'Forward',
        draftYear: 2019,
        jersey: 1,
        stats: { pts: 23.7, reb: 6.8, ast: 5.0 },
    },
    {
        name: 'Brandon Ingram',
        team: 'New Orleans Pelicans',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612740/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1627742.png',
        position: 'Forward',
        draftYear: 2016,
        jersey: 14,
        stats: { pts: 23.2, reb: 5.5, ast: 5.1 },
    },
    {
        name: 'CJ McCollum',
        team: 'New Orleans Pelicans',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612740/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203468.png',
        position: 'Guard',
        draftYear: 2013,
        jersey: 3,
        stats: { pts: 20.3, reb: 4.4, ast: 5.7 },
    },
    {
        name: 'Jonas Valančiūnas',
        team: 'New Orleans Pelicans',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612740/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/202685.png',
        position: 'Center',
        draftYear: 2011,
        jersey: 17,
        stats: { pts: 13.8, reb: 9.6, ast: 2.1 },
    },
    {
        name: 'Trey Murphy III',
        team: 'New Orleans Pelicans',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612740/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630544.png',
        position: 'Forward',
        draftYear: 2021,
        jersey: 25,
        stats: { pts: 13.0, reb: 3.6, ast: 1.4 },
    },
    {
        name: 'Jalen Brunson',
        team: 'New York Knicks',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612752/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628973.png',
        position: 'Guard',
        draftYear: 2018,
        jersey: 11,
        stats: { pts: 27.8, reb: 3.6, ast: 6.7 },
    },
    {
        name: 'Julius Randle',
        team: 'New York Knicks',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612752/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203944.png',
        position: 'Forward',
        draftYear: 2014,
        jersey: 30,
        stats: { pts: 24.0, reb: 9.2, ast: 5.0 },
    },
    {
        name: 'RJ Barrett',
        team: 'New York Knicks',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612752/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629628.png',
        position: 'Forward',
        draftYear: 2019,
        jersey: 9,
        stats: { pts: 20.0, reb: 5.4, ast: 2.7 },
    },
    {
        name: 'Josh Hart',
        team: 'New York Knicks',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612752/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628404.png',
        position: 'Guard-Forward',
        draftYear: 2017,
        jersey: 3,
        stats: { pts: 8.7, reb: 7.8, ast: 3.8 },
    },
    {
        name: 'Mitchell Robinson',
        team: 'New York Knicks',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612752/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629011.png',
        position: 'Center',
        draftYear: 2018,
        jersey: 23,
        stats: { pts: 6.2, reb: 10.3, ast: 1.3 },
    },
    {
        name: 'Shai Gilgeous-Alexander',
        team: 'Oklahoma City Thunder',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612760/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628983.png',
        position: 'Guard',
        draftYear: 2018,
        jersey: 2,
        stats: { pts: 30.1, reb: 5.6, ast: 6.3 },
    },
    {
        name: 'Josh Giddey',
        team: 'Oklahoma City Thunder',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612760/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630581.png',
        position: 'Guard',
        draftYear: 2021,
        jersey: 3,
        stats: { pts: 12.3, reb: 6.4, ast: 4.8 },
    },
    {
        name: 'Jalen Williams',
        team: 'Oklahoma City Thunder',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612760/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1631114.png',
        position: 'Forward',
        draftYear: 2022,
        jersey: 8,
        stats: { pts: 19.5, reb: 4.0, ast: 4.6 },
    },
    {
        name: 'Luguentz Dort',
        team: 'Oklahoma City Thunder',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612760/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629652.png',
        position: 'Guard-Forward',
        draftYear: 2019,
        jersey: 5,
        stats: { pts: 10.9, reb: 3.8, ast: 2.0 },
    },
    {
        name: 'Chet Holmgren',
        team: 'Oklahoma City Thunder',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612760/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1631096.png',
        position: 'Center',
        draftYear: 2022,
        jersey: 7,
        stats: { pts: 16.5, reb: 7.9, ast: 2.5 },
    },
    {
        name: 'Paolo Banchero',
        team: 'Orlando Magic',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612753/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1631094.png',
        position: 'Forward',
        draftYear: 2022,
        jersey: 5,
        stats: { pts: 22.5, reb: 6.9, ast: 5.4 },
    },
    {
        name: 'Franz Wagner',
        team: 'Orlando Magic',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612753/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630532.png',
        position: 'Forward',
        draftYear: 2021,
        jersey: 22,
        stats: { pts: 19.5, reb: 5.3, ast: 3.8 },
    },
    {
        name: 'Jalen Suggs',
        team: 'Orlando Magic',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612753/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630591.png',
        position: 'Guard',
        draftYear: 2021,
        jersey: 4,
        stats: { pts: 12.6, reb: 3.4, ast: 2.9 },
    },
    {
        name: 'Wendell Carter Jr.',
        team: 'Orlando Magic',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612753/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628976.png',
        position: 'Center',
        draftYear: 2018,
        jersey: 34,
        stats: { pts: 11.2, reb: 8.7, ast: 2.2 },
    },
    {
        name: 'Markelle Fultz',
        team: 'Orlando Magic',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612753/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628365.png',
        position: 'Guard',
        draftYear: 2017,
        jersey: 20,
        stats: { pts: 11.5, reb: 3.9, ast: 5.5 },
    },
    {
        name: 'Joel Embiid',
        team: 'Philadelphia 76ers',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612755/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203954.png',
        position: 'Center',
        draftYear: 2014,
        jersey: 21,
        stats: { pts: 33.1, reb: 10.8, ast: 5.6 },
    },
    {
        name: 'Tyrese Maxey',
        team: 'Philadelphia 76ers',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612755/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630178.png',
        position: 'Guard',
        draftYear: 2020,
        jersey: 0,
        stats: { pts: 25.9, reb: 3.7, ast: 6.2 },
    },
    {
        name: 'Tobias Harris',
        team: 'Philadelphia 76ers',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612755/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/202699.png',
        position: 'Forward',
        draftYear: 2011,
        jersey: 12,
        stats: { pts: 17.2, reb: 6.5, ast: 3.3 },
    },
    {
        name: 'Kelly Oubre Jr.',
        team: 'Philadelphia 76ers',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612755/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1626162.png',
        position: 'Forward',
        draftYear: 2015,
        jersey: 9,
        stats: { pts: 15.4, reb: 4.8, ast: 1.5 },
    },
    {
        name: 'De\'Anthony Melton',
        team: 'Philadelphia 76ers',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612755/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629001.png',
        position: 'Guard',
        draftYear: 2018,
        jersey: 8,
        stats: { pts: 11.1, reb: 4.0, ast: 3.0 },
    },
    {
        name: 'Devin Booker',
        team: 'Phoenix Suns',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612756/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1626164.png',
        position: 'Guard',
        draftYear: 2015,
        jersey: 1,
        stats: { pts: 27.1, reb: 4.6, ast: 6.9 },
    },
    {
        name: 'Kevin Durant',
        team: 'Phoenix Suns',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612756/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201142.png',
        position: 'Forward',
        draftYear: 2007,
        jersey: 35,
        stats: { pts: 27.3, reb: 6.7, ast: 5.7 },
    },
    {
        name: 'Bradley Beal',
        team: 'Phoenix Suns',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612756/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203078.png',
        position: 'Guard',
        draftYear: 2012,
        jersey: 3,
        stats: { pts: 22.0, reb: 4.0, ast: 5.4 },
    },
    {
        name: 'Jusuf Nurkić',
        team: 'Phoenix Suns',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612756/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203994.png',
        position: 'Center',
        draftYear: 2014,
        jersey: 20,
        stats: { pts: 11.8, reb: 10.4, ast: 3.9 },
    },
    {
        name: 'Grayson Allen',
        team: 'Phoenix Suns',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612756/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628960.png',
        position: 'Guard',
        draftYear: 2018,
        jersey: 8,
        stats: { pts: 13.4, reb: 3.9, ast: 3.0 },
    },
    {
        name: 'Anfernee Simons',
        team: 'Portland Trail Blazers',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612757/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629014.png',
        position: 'Guard',
        draftYear: 2018,
        jersey: 1,
        stats: { pts: 23.4, reb: 3.5, ast: 5.5 },
    },
    {
        name: 'Jerami Grant',
        team: 'Portland Trail Blazers',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612757/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203924.png',
        position: 'Forward',
        draftYear: 2014,
        jersey: 9,
        stats: { pts: 21.0, reb: 4.5, ast: 2.8 },
    },
    {
        name: 'Deandre Ayton',
        team: 'Portland Trail Blazers',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612757/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629028.png',
        position: 'Center',
        draftYear: 2018,
        jersey: 2,
        stats: { pts: 16.7, reb: 11.0, ast: 1.9 },
    },
    {
        name: 'Malcolm Brogdon',
        team: 'Portland Trail Blazers',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612757/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1627763.png',
        position: 'Guard',
        draftYear: 2016,
        jersey: 11,
        stats: { pts: 15.7, reb: 3.8, ast: 5.5 },
    },
    {
        name: 'Matisse Thybulle',
        team: 'Portland Trail Blazers',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612757/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629680.png',
        position: 'Guard-Forward',
        draftYear: 2019,
        jersey: 4,
        stats: { pts: 7.5, reb: 2.8, ast: 1.4 },
    },
    {
        name: 'De\'Aaron Fox',
        team: 'Sacramento Kings',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612758/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628368.png',
        position: 'Guard',
        draftYear: 2017,
        jersey: 5,
        stats: { pts: 27.3, reb: 4.1, ast: 6.5 },
    },
    {
        name: 'Domantas Sabonis',
        team: 'Sacramento Kings',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612758/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1627734.png',
        position: 'Forward-Center',
        draftYear: 2016,
        jersey: 10,
        stats: { pts: 19.4, reb: 13.5, ast: 8.2 },
    },
    {
        name: 'Harrison Barnes',
        team: 'Sacramento Kings',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612758/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203084.png',
        position: 'Forward',
        draftYear: 2012,
        jersey: 40,
        stats: { pts: 12.5, reb: 3.0, ast: 1.2 },
    },
    {
        name: 'Kevin Huerter',
        team: 'Sacramento Kings',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612758/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628989.png',
        position: 'Guard',
        draftYear: 2018,
        jersey: 9,
        stats: { pts: 15.2, reb: 3.4, ast: 3.0 },
    },
    {
        name: 'Malik Monk',
        team: 'Sacramento Kings',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612758/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628370.png',
        position: 'Guard',
        draftYear: 2017,
        jersey: 0,
        stats: { pts: 15.9, reb: 2.9, ast: 5.1 },
    },
    {
        name: 'Victor Wembanyama',
        team: 'San Antonio Spurs',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612759/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1641701.png',
        position: 'Center',
        draftYear: 2023,
        jersey: 1,
        stats: { pts: 21.4, reb: 10.6, ast: 3.9 },
    },
    {
        name: 'Keldon Johnson',
        team: 'San Antonio Spurs',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612759/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629640.png',
        position: 'Forward',
        draftYear: 2019,
        jersey: 3,
        stats: { pts: 17.6, reb: 5.5, ast: 3.2 },
    },
    {
        name: 'Devin Vassell',
        team: 'San Antonio Spurs',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612759/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630170.png',
        position: 'Guard',
        draftYear: 2020,
        jersey: 24,
        stats: { pts: 19.5, reb: 4.1, ast: 3.6 },
    },
    {
        name: 'Jeremy Sochan',
        team: 'San Antonio Spurs',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612759/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1631118.png',
        position: 'Forward',
        draftYear: 2022,
        jersey: 10,
        stats: { pts: 11.6, reb: 6.4, ast: 3.4 },
    },
    {
        name: 'Zach Collins',
        team: 'San Antonio Spurs',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612759/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628380.png',
        position: 'Center',
        draftYear: 2017,
        jersey: 23,
        stats: { pts: 11.2, reb: 5.5, ast: 2.8 },
    },
    {
        name: 'Scottie Barnes',
        team: 'Toronto Raptors',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612761/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630567.png',
        position: 'Forward',
        draftYear: 2021,
        jersey: 4,
        stats: { pts: 20.2, reb: 8.4, ast: 6.1 },
    },
    {
        name: 'Gary Trent Jr.',
        team: 'Toronto Raptors',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612761/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629018.png',
        position: 'Guard',
        draftYear: 2018,
        jersey: 33,
        stats: { pts: 17.0, reb: 2.6, ast: 1.6 },
    },
    {
        name: 'Jakob Poeltl',
        team: 'Toronto Raptors',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612761/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1627751.png',
        position: 'Center',
        draftYear: 2016,
        jersey: 19,
        stats: { pts: 11.1, reb: 8.5, ast: 2.6 },
    },
    {
        name: 'Immanuel Quickley',
        team: 'Toronto Raptors',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612761/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630193.png',
        position: 'Guard',
        draftYear: 2020,
        jersey: 5,
        stats: { pts: 16.1, reb: 3.2, ast: 5.4 },
    },
    {
        name: 'Kelly Olynyk',
        team: 'Toronto Raptors',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612761/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203482.png',
        position: 'Forward-Center',
        draftYear: 2013,
        jersey: 41,
        stats: { pts: 8.6, reb: 5.1, ast: 4.1 },
    },
    {
        name: 'Lauri Markkanen',
        team: 'Utah Jazz',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612762/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628374.png',
        position: 'Forward',
        draftYear: 2017,
        jersey: 23,
        stats: { pts: 23.2, reb: 8.1, ast: 1.9 },
    },
    {
        name: 'Jordan Clarkson',
        team: 'Utah Jazz',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612762/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203903.png',
        position: 'Guard',
        draftYear: 2014,
        jersey: 0,
        stats: { pts: 17.1, reb: 3.5, ast: 4.4 },
    },
    {
        name: 'Collin Sexton',
        team: 'Utah Jazz',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612762/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629012.png',
        position: 'Guard',
        draftYear: 2018,
        jersey: 2,
        stats: { pts: 18.6, reb: 2.9, ast: 4.9 },
    },
    {
        name: 'John Collins',
        team: 'Utah Jazz',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612762/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628381.png',
        position: 'Forward',
        draftYear: 2017,
        jersey: 20,
        stats: { pts: 13.6, reb: 8.5, ast: 1.5 },
    },
    {
        name: 'Walker Kessler',
        team: 'Utah Jazz',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612762/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1631117.png',
        position: 'Center',
        draftYear: 2022,
        jersey: 24,
        stats: { pts: 8.8, reb: 8.4, ast: 0.9 },
    },
    {
        name: 'Kyle Kuzma',
        team: 'Washington Wizards',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612764/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628398.png',
        position: 'Forward',
        draftYear: 2017,
        jersey: 33,
        stats: { pts: 22.3, reb: 6.6, ast: 4.2 },
    },
    {
        name: 'Jordan Poole',
        team: 'Washington Wizards',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612764/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629673.png',
        position: 'Guard',
        draftYear: 2019,
        jersey: 13,
        stats: { pts: 17.4, reb: 2.6, ast: 3.9 },
    },
    {
        name: 'Tyus Jones',
        team: 'Washington Wizards',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612764/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1626145.png',
        position: 'Guard',
        draftYear: 2015,
        jersey: 5,
        stats: { pts: 12.0, reb: 2.7, ast: 7.3 },
    },
    {
        name: 'Deni Avdija',
        team: 'Washington Wizards',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612764/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630166.png',
        position: 'Forward',
        draftYear: 2020,
        jersey: 8,
        stats: { pts: 14.7, reb: 7.2, ast: 3.8 },
    },
    {
        name: 'Marvin Bagley III',
        team: 'Washington Wizards',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612764/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628963.png',
        position: 'Forward-Center',
        draftYear: 2018,
        jersey: 35,
        stats: { pts: 12.0, reb: 6.4, ast: 1.0 },
    }
];



const defaultState = {
    players: [],
    scores: {},
    turnIndex: 0,
};

const loadState = () => {
    if (typeof window === 'undefined') {
        return { ...defaultState };
    }

    try {
        const stored = window.localStorage.getItem(STORAGE_KEY);
        if (!stored) {
            return { ...defaultState };
        }

        const parsed = JSON.parse(stored);
        return {
            players: Array.isArray(parsed.players) ? parsed.players.slice(0, 24) : [],
            scores: typeof parsed.scores === 'object' && parsed.scores !== null ? parsed.scores : {},
            turnIndex: Number.isInteger(parsed.turnIndex) ? parsed.turnIndex : 0,
        };
    } catch (error) {
        console.error('Failed to load stored state', error);
        return { ...defaultState };
    }
};

const persistState = () => {
    if (typeof window === 'undefined') {
        return;
    }

    try {
        const serializable = {
            players: state.players,
            scores: state.scores,
            turnIndex: state.turnIndex,
        };
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(serializable));
    } catch (error) {
        console.warn('Unable to persist state', error);
    }
};

const state = loadState();

const yearSpan = document.getElementById('year');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

const main = document.querySelector('.nba-main');
const screens = document.querySelectorAll('.screen');
const lobbyEmpty = document.getElementById('lobby-empty');
const lobbyList = document.getElementById('player-list');
const playerForm = document.getElementById('player-form');
const playerInput = document.getElementById('player-name');
const clearLobbyButton = document.getElementById('clear-lobby');
const startGameButton = document.getElementById('start-game');
const resetScoreboardButton = document.getElementById('reset-scoreboard');
const scoreboardTable = document.querySelector('.score-table');
const scoreboardEmpty = document.getElementById('scoreboard-empty');
const scoreboardRows = document.getElementById('scoreboard-rows');

const turnPlayer = document.getElementById('current-turn-player');
const beginRoundButton = document.getElementById('begin-round');
const penaltyLabel = document.getElementById('penalty-label');
const guessForm = document.getElementById('guess-form');
const guessInput = document.getElementById('player-guess');
const guessDatalist = document.getElementById('player-options');
const roundFeedback = document.getElementById('round-feedback');
const teamLogo = document.getElementById('team-logo');
const playerPhotoFrame = document.querySelector('.player-photo');
const playerPhoto = document.getElementById('player-photo');
const hintPosition = document.getElementById('hint-position');
const hintDraft = document.getElementById('hint-draft');
const hintJersey = document.getElementById('hint-jersey');
const hintPts = document.getElementById('hint-pts');
const hintReb = document.getElementById('hint-reb');
const hintAst = document.getElementById('hint-ast');

const resultEyebrow = document.getElementById('result-eyebrow');
const resultTitle = document.getElementById('result-title');
const resultPhoto = document.getElementById('result-photo');
const resultName = document.getElementById('result-name');
const resultTeam = document.getElementById('result-team');
const resultPosition = document.getElementById('result-position');
const resultDraft = document.getElementById('result-draft');
const resultJersey = document.getElementById('result-jersey');
const resultPts = document.getElementById('result-pts');
const resultReb = document.getElementById('result-reb');
const resultAst = document.getElementById('result-ast');
const resultMessage = document.getElementById('result-message');
const nextPlayerButton = document.getElementById('next-player');

if (penaltyLabel) {
    penaltyLabel.textContent = `${DEFAULT_PENALTY} drink stakes`;
}

if (guessDatalist) {
    PLAYER_POOL.forEach((player) => {
        const option = document.createElement('option');
        option.value = player.name;
        guessDatalist.appendChild(option);
    });
}

let currentMystery = null;
let lastMysteryName = null;

const normalizeName = (value) => value.trim().replace(/\s+/g, ' ');
const normalizeKey = (value) => normalizeName(value).toLowerCase();

const ensureScores = () => {
    const nextScores = {};
    state.players.forEach((name) => {
        const key = name;
        const existing = state.scores[key];
        nextScores[key] = existing ? { ...existing } : { given: 0, taken: 0 };
    });
    state.scores = nextScores;
    if (state.turnIndex >= state.players.length) {
        state.turnIndex = state.players.length === 0 ? 0 : state.players.length - 1;
    }
};

const showScreen = (name) => {
    screens.forEach((screen) => {
        screen.hidden = screen.dataset.screen !== name;
    });

    if (main) {
        main.setAttribute('data-stage', name);
    }
};

const renderPlayers = () => {
    if (!lobbyList) {
        return;
    }

    lobbyList.innerHTML = '';
    state.players.forEach((name, index) => {
        const li = document.createElement('li');
        li.className = 'player-item';
        if (index === state.turnIndex) {
            li.classList.add('is-active');
            li.setAttribute('aria-current', 'true');
        }

        const nameSpan = document.createElement('span');
        nameSpan.className = 'player-item__name';
        nameSpan.textContent = name;

        const totals = state.scores[name] ?? { given: 0, taken: 0 };
        const totalsBadge = document.createElement('span');
        totalsBadge.className = 'player-item__totals';
        totalsBadge.textContent = `${totals.given} given · ${totals.taken} taken`;

        const actions = document.createElement('div');
        actions.className = 'player-item__actions';

        const removeButton = document.createElement('button');
        removeButton.type = 'button';
        removeButton.className = 'player-item__remove';
        removeButton.textContent = 'Remove';
        removeButton.setAttribute('aria-label', `Remove ${name}`);
        removeButton.addEventListener('click', () => removePlayer(name));

        actions.appendChild(removeButton);
        li.appendChild(nameSpan);
        li.appendChild(totalsBadge);
        li.appendChild(actions);
        lobbyList.appendChild(li);
    });

    const hasPlayers = state.players.length > 0;
    if (lobbyEmpty) {
        lobbyEmpty.hidden = hasPlayers;
    }
};

const renderScoreboard = () => {
    if (!scoreboardTable || !scoreboardRows || !scoreboardEmpty) {
        return;
    }

    const hasPlayers = state.players.length > 0;
    scoreboardTable.hidden = !hasPlayers;
    scoreboardEmpty.hidden = hasPlayers;

    scoreboardRows.innerHTML = '';
    if (!hasPlayers) {
        return;
    }

    state.players.forEach((name, index) => {
        const row = document.createElement('tr');
        if (index === state.turnIndex) {
            row.classList.add('is-active');
            row.setAttribute('aria-current', 'true');
        }

        const nameCell = document.createElement('th');
        nameCell.scope = 'row';
        nameCell.textContent = name;

        const givenCell = document.createElement('td');
        givenCell.textContent = String(state.scores[name]?.given ?? 0);

        const takenCell = document.createElement('td');
        takenCell.textContent = String(state.scores[name]?.taken ?? 0);

        row.appendChild(nameCell);
        row.appendChild(givenCell);
        row.appendChild(takenCell);
        scoreboardRows.appendChild(row);
    });
};

const updateControls = () => {
    const hasPlayers = state.players.length > 0;

    if (startGameButton) {
        startGameButton.disabled = !hasPlayers;
    }

    if (clearLobbyButton) {
        clearLobbyButton.disabled = !hasPlayers;
    }

    if (resetScoreboardButton) {
        resetScoreboardButton.disabled = !hasPlayers;
    }
};

const syncUi = () => {
    ensureScores();
    renderPlayers();
    renderScoreboard();
    updateControls();
    persistState();
};

const addPlayer = (rawName) => {
    const trimmed = normalizeName(rawName);
    if (!trimmed) {
        return;
    }

    const exists = state.players.some((name) => normalizeKey(name) === normalizeKey(trimmed));
    if (exists) {
        playerInput?.focus({ preventScroll: true });
        return;
    }

    state.players.push(trimmed);
    syncUi();
};

const removePlayer = (name) => {
    const index = state.players.findIndex((player) => player === name);
    if (index === -1) {
        return;
    }

    state.players.splice(index, 1);
    if (state.turnIndex >= state.players.length) {
        state.turnIndex = state.players.length === 0 ? 0 : state.players.length - 1;
    }
    syncUi();
};

const clearLobby = () => {
    state.players = [];
    state.scores = {};
    state.turnIndex = 0;
    syncUi();
};

const resetScoreboard = () => {
    Object.keys(state.scores).forEach((key) => {
        state.scores[key] = { given: 0, taken: 0 };
    });
    persistState();
    renderPlayers();
    renderScoreboard();
};

const getRandomMystery = () => {
    if (PLAYER_POOL.length === 0) {
        return null;
    }

    let candidate = PLAYER_POOL[Math.floor(Math.random() * PLAYER_POOL.length)];
    if (PLAYER_POOL.length > 1) {
        let attempts = 0;
        while (candidate.name === lastMysteryName && attempts < 5) {
            candidate = PLAYER_POOL[Math.floor(Math.random() * PLAYER_POOL.length)];
            attempts += 1;
        }
    }
    lastMysteryName = candidate.name;
    return candidate;
};

const updateHintUi = (player) => {
    if (!player) {
        return;
    }

    if (teamLogo) {
        teamLogo.src = player.teamLogo;
        teamLogo.alt = `${player.team} logo`;
    }
    if (playerPhoto) {
        playerPhoto.src = player.photo;
        playerPhoto.alt = 'Silhouette of the mystery player';
    }
    if (playerPhotoFrame) {
        playerPhotoFrame.style.setProperty('--player-photo-src', `url("${player.photo}")`);
        playerPhotoFrame.classList.remove('is-revealed');
    }

    if (hintPosition) {
        hintPosition.textContent = player.position;
    }
    if (hintDraft) {
        hintDraft.textContent = String(player.draftYear);
    }
    if (hintJersey) {
        hintJersey.textContent = `#${player.jersey}`;
    }
    if (hintPts) {
        hintPts.textContent = player.stats.pts.toFixed(1);
    }
    if (hintReb) {
        hintReb.textContent = player.stats.reb.toFixed(1);
    }
    if (hintAst) {
        hintAst.textContent = player.stats.ast.toFixed(1);
    }
};

const updateResultUi = (isCorrect) => {
    if (!currentMystery) {
        return;
    }

    const rewardText = `${DEFAULT_PENALTY} drinks`;
    if (resultEyebrow) {
        resultEyebrow.textContent = isCorrect ? 'Bingo' : 'Close call';
    }
    if (resultTitle) {
        resultTitle.textContent = isCorrect
            ? `Correct! Allocate ${rewardText}.`
            : `Incorrect! Drink ${rewardText}.`;
    }
    if (resultPhoto) {
        resultPhoto.src = currentMystery.photo;
        resultPhoto.alt = `${currentMystery.name} portrait`;
    }
    if (resultName) {
        resultName.textContent = currentMystery.name;
    }
    if (resultTeam) {
        resultTeam.textContent = currentMystery.team;
    }
    if (resultPosition) {
        resultPosition.textContent = currentMystery.position;
    }
    if (resultDraft) {
        resultDraft.textContent = String(currentMystery.draftYear);
    }
    if (resultJersey) {
        resultJersey.textContent = `#${currentMystery.jersey}`;
    }
    if (resultPts) {
        resultPts.textContent = currentMystery.stats.pts.toFixed(1);
    }
    if (resultReb) {
        resultReb.textContent = currentMystery.stats.reb.toFixed(1);
    }
    if (resultAst) {
        resultAst.textContent = currentMystery.stats.ast.toFixed(1);
    }
    if (resultMessage) {
        resultMessage.textContent = isCorrect
            ? `Nice work! Share the ${DEFAULT_PENALTY} drinks however you want.`
            : `Better luck next time. Down ${DEFAULT_PENALTY} drinks and pass to the next player.`;
    }
};

const startTurnGate = () => {
    if (!turnPlayer) {
        return;
    }
    if (state.players.length === 0) {
        showScreen('lobby');
        return;
    }

    const current = state.players[state.turnIndex] ?? state.players[0];
    turnPlayer.textContent = current;
    showScreen('turn');
};

const startRound = () => {
    currentMystery = getRandomMystery();
    if (!currentMystery) {
        return;
    }
    updateHintUi(currentMystery);
    if (roundFeedback) {
        roundFeedback.textContent = '';
    }
    guessForm?.reset();
    showScreen('round');
    window.requestAnimationFrame(() => {
        guessInput?.focus({ preventScroll: true });
    });
};

const applyResult = (isCorrect) => {
    if (state.players.length === 0) {
        showScreen('lobby');
        return;
    }

    const current = state.players[state.turnIndex] ?? state.players[0];
    const playerScore = state.scores[current] ?? { given: 0, taken: 0 };
    if (isCorrect) {
        playerScore.given += DEFAULT_PENALTY;
    } else {
        playerScore.taken += DEFAULT_PENALTY;
    }
    state.scores[current] = playerScore;
    updateResultUi(isCorrect);
    if (playerPhotoFrame) {
        playerPhotoFrame.classList.add('is-revealed');
    }
    renderPlayers();
    renderScoreboard();
    persistState();
    showScreen('result');
};

const advanceTurn = () => {
    if (state.players.length === 0) {
        showScreen('lobby');
        return;
    }
    state.turnIndex = (state.turnIndex + 1) % state.players.length;
    persistState();
    renderPlayers();
    renderScoreboard();
    startTurnGate();
};

playerForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!playerInput) {
        return;
    }

    addPlayer(playerInput.value);
    playerForm.reset();
    playerInput.focus({ preventScroll: true });
});

clearLobbyButton?.addEventListener('click', () => {
    if (state.players.length === 0) {
        return;
    }

    const confirmed = window.confirm('Remove all players from the lobby?');
    if (!confirmed) {
        return;
    }

    clearLobby();
    playerInput?.focus({ preventScroll: true });
});

resetScoreboardButton?.addEventListener('click', () => {
    if (state.players.length === 0) {
        return;
    }
    const confirmed = window.confirm('Reset drink totals for everyone?');
    if (!confirmed) {
        return;
    }
    resetScoreboard();
});

startGameButton?.addEventListener('click', () => {
    if (state.players.length === 0) {
        return;
    }

    if (state.turnIndex >= state.players.length) {
        state.turnIndex = 0;
    }
    persistState();
    renderPlayers();
    renderScoreboard();
    startTurnGate();
});

beginRoundButton?.addEventListener('click', () => {
    startRound();
});

const backToLobbyButtons = document.querySelectorAll('[data-action="back-to-lobby"]');
backToLobbyButtons.forEach((button) => {
    button.addEventListener('click', () => {
        showScreen('lobby');
    });
});

if (guessForm) {
    guessForm.addEventListener('submit', (event) => {
        event.preventDefault();
        if (!guessInput || !currentMystery) {
            return;
        }

        const guess = normalizeName(guessInput.value);
        if (!guess) {
            if (roundFeedback) {
                roundFeedback.textContent = 'Enter a player name before submitting.';
            }
            guessInput.focus({ preventScroll: true });
            return;
        }

        if (roundFeedback) {
            roundFeedback.textContent = '';
        }

        const isCorrect = normalizeKey(guess) === normalizeKey(currentMystery.name);
        applyResult(isCorrect);
    });
}

nextPlayerButton?.addEventListener('click', () => {
    advanceTurn();
});

syncUi();
