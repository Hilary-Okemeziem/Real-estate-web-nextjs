import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const { data } = await axios.get(url, {
        headers: {
            'X-RapidAPI-Key': '297629cf2fmsh6fcc050ef398719p1fff89jsnffc3f065b113',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        },
    });
    
    return data;
};