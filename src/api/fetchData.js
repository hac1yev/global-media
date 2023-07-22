import axios from 'axios';

export const fetchData = async (baseUrl) =>{
    const response = await axios.get(`https://admin.globalmediaforum.com/${baseUrl}`);
    const {data} = response;
    return data;
};
export const fetchData1 = async (baseUrl) =>{
    const response = await axios.get(`https://macts-fath.netlify.app/api/${baseUrl}`);
    const {data} = response;
    return data;
};
