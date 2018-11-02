
    var Landon = {firstName:"Landon", lastName:"Watson", age:"16",
        favoriteTVShow:"The Office", favoriteSong:"Lucid Dreams"};
    var Michele = {firstName:"Michele", lastName:"Watson", age:"40",
        favoriteTVShow:"Stranger Things", favoriteSong:"Total Eclipse of the Heart"};
    var Coy = {firstName:"Coy", lastName:"Watson", age:"45",
        favoriteTVShow:"Parks and Rec", favoriteSong:"No Diggity"};
    var Kate = {firstName:"Kate", lastName:"Mahony", age:"15",
        favoriteTVShow:"Spongebob", favoriteSong:"Beez in the Trap"};
    var Jack = {firstName:"Jack", lastName:"Mahony", age:"17",
        favoriteTVShow:"Criminal Minds", favoriteSong:"Gucci Gang"};

    var family = [Landon, Michele, Coy, Kate, Jack];

for(let i = 0; i < family.length; i++)
    {
        console.log(family[i].firstName + " " + family[i].lastName);
        console.log(family[i].favoriteSong);
    }

for(let j = 0; j < family.length; j++)
    {
        family[j].favoriteTVShow = "Blackish";
        console.log(family[j].favoriteTVShow);
    }


