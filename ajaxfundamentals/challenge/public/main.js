$(document).ready(function(){
	
	$.ajax({
		type: 'GET',
		url: 'https://na1.api.riotgames.com/lol/static-data/v3/champions?locale=en_US&dataById=false&api_key=RGAPI-f5792db8-ee51-41b5-a3cd-c5fb43037358',
		// url: 'http://rest.learncode.academy/api/learncode/javascriptfall'
		headers: {
    "Origin": "https://developer.riotgames.com",
    "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
    "X-Riot-Token": "RGAPI-f5792db8-ee51-41b5-a3cd-c5fb43037358",
    "Accept-Language": "en-US,en;q=0.8",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.101 Safari/537.36"
}
	}).done(function(data){
		console.log(data)
	})
})
	
