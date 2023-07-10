import axios from 'axios';

export const fetchData = async (baseUrl) =>{
    const response = await axios.get(`https://gmfui20230625163049.azurewebsites.net/az/${baseUrl}`);
    const {data} = response;
    return data;
};
