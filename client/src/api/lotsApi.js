import axios from 'axios';

import { baseUrl } from './config';

const lotsApi = {
    getLots: async function (location) {
        console.log(baseUrl + location);
        return (
            axios.get(baseUrl + location)
                .then(res => res)
                .catch(err => err)
        )
    },
};

export default lotsApi;