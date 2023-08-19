export async function load({ fetch }){
    const url = 'https://sportscore1.p.rapidapi.com/sports/1/events/live?page=1';
    const options = {
	method: 'GET',
    'cache': 'force-cache',
	headers: {
		'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
		'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com'
	}
}; 

   const response = await fetch(url,options),
         data = await response.json(),
         result = data.data

    return{
        result
    }
}