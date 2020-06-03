import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

const countryUrl = 'https://covid19.mathdro.id/api/countries';

export const fetchData = async () => {
    try {
        const { data } = await axios.get(url);

        const modifiedData = {
            confirmed: data.confirmed,
            recovered: data.recovered,
            deaths: data.deaths
        }
        return modifiedData;
    } catch (error) {
        console.log(error);
    }
}

export const fetchCountry = async () => {
    try {
        const { data: { countries } } = await axios.get(countryUrl);
        return countries.map((country) => country.name);
    } catch (error) {
        console.log(error);
    }
}


