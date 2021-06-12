import axios from "axios";
 
const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?';
const apikey = 'dccb75b76a65b674eadcc853e075d2e7';

export const getWeatherData = async (cityname) => {

    try {
        const {data} = await axios.get(baseUrl + `q=${cityname}&appid=${apikey}`);
        return data;
        
    } catch (error) {
        throw error;
    }
}