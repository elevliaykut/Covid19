import axios from 'axios';

export const totalValues = () => {
    return axios
        .get('https://covid19.mathdro.id/api', {
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        })
}