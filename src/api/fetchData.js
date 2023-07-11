import axios from 'axios';

export const fetchData = async (baseUrl) =>{
    const response = await axios.get(`https://globalmedia.azurewebsites.net/az/${baseUrl}`);
    const {data} = response;
    return data;
};
