import axios from 'axios';

export const fetchData = async (baseUrl) =>{
    const response = await axios.get(`https://admin.globalmediaforum.com/${baseUrl}`);
    const {data} = response;
    return data;
};
