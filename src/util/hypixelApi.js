require('dotenv').config();

module.exports = {
    async getBedwarsStats(player) {
        fetch('https://sessionserver.mojang.com/session/minecraft/profile/${player}').json()
			.then(data =>{
                let bedwarsStats = data["player"]["stats"]["Bedwars"];
                let bedwarsWLR = (bedwarsStats['wins_bedwars'] / bedwarsStats['losses_bedwars']);
                let bedwarsFKDR = (bedwarsStats['final_kills_bedwars'] / bedwarsStats['final_deaths_bedwars]);
                const payload = {
                	wlr: bedwarsWLR,
                	fkdr: bedwarsFKDR
                }
            })
			.catch(error => console.log(error));
}