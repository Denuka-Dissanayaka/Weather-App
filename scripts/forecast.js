const key = 'GIovAqhieAE5VCAUhXOB23aQ1S3LHXH0';
console.log(key)

const getCity = async (city) => {
    const cityName = city;
    const responce = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=GIovAqhieAE5VCAUhXOB23aQ1S3LHXH0&q=${cityName}`);
    const data = await responce.json();
    return data;
}

const getWeatherCondition = async (key) => {
    const cityKey = key;
    const responce = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=GIovAqhieAE5VCAUhXOB23aQ1S3LHXH0`);
    const data = await responce.json();
    return data;
}





// http://dataservice.accuweather.com/currentconditions/v1/311399?apikey=GIovAqhieAE5VCAUhXOB23aQ1S3LHXH0