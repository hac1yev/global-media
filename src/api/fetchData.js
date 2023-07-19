import axios from 'axios';

export const fetchData = async (baseUrl) =>{
    const response = await axios.get(`globalmediaadmin.azurewebsites.net/${baseUrl}`);
    const {data} = response;
    return data;
};
