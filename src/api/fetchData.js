import axios from 'axios';

export const fetchData = async (baseUrl) =>{
    const response = await axios.get(`http://orkhanganbarov.somee.com/${baseUrl}`);
    const {data} = response;
    return data;
};
