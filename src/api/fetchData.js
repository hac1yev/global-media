import axios from 'axios';

export const fetchData = async (baseUrl) =>{
    const response = await axios.get(`http://globalmediaforu-001-site1.itempurl.com/${baseUrl}`);
    const {data} = response;
    return data;
};
