import { apiKey } from './apiKey';

export function fetchWeather(location?: string): Promise<any> {
    if (location) {
        return fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Location not found');
                }
                return response.json()
            })
            .then((data) => data);
    }
    else {
        return fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=auto:ip`)
            .then((response) => response.json())
            .then((data) => data);
    }
}