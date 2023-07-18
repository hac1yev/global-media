import axios from 'axios';

export const fetchData = async (baseUrl) =>{
    const response = await axios.get(`http://admin.globalmediaforum.com/${baseUrl}`);
    const {data} = response;
    return data;
};
