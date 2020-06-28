import axios from 'axios';

export const totalValues = () => {
    return axios
        .get('https://covid19.mathdro.id/api', {
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => {
            console.log(response.data);
            return response.data;
        })
        .catch(error => {
            console.log(error);
        })
}

export const getCountries = () => {
    return axios
        .get('https://covid19.mathdro.id/api/countries', {
            hedaer: { 'Content-Type': 'application/json' }
        })
        .then(response => {
            console.log(response.data.countries);
            return response.data.countries;
        })
        .catch(error => {
            console.log(error);
        })
}