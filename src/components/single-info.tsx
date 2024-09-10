
import { WeatherInfo } from '../definitions';
// @ts-ignore
import { WiHumidity, WiBarometer, WiDaySunny, WiThermometer, WiWindy, WiNightAltCloudyHigh } from 'weather-icons-react';


export default function SingleInfo({ data, type }: { data: WeatherInfo, type: string }) {
    return (
        <div>
            {type === 'humidity' && (
                <div className='flex flex-col items-center text-3xl'>
                    <div className='flex items-center'>
                        <WiHumidity size={42} color='#FFF' />
                        <span className='ml-1'>Humidity</span>
                    </div>
                    <div>
                        {data.current.humidity}%
                    </div>
                </div>
            )}
            {type === 'pressure' && (
                <div className='flex flex-col items-center text-3xl'>
                    <div className='flex items-center'>
                        <WiBarometer size={42} color='#FFF' />
                        <span className='ml-1'>Pressure</span>
                    </div>
                    <div>
                        {data.current.pressure_mb} mb
                    </div>
                </div>
            )}
            {type === 'uv' && (
                <div className='flex flex-col items-center text-3xl'>
                    <div className='flex items-center'>
                        <WiDaySunny size={42} color='#FFF' />
                        <span className='ml-1'>UV index</span>
                    </div>
                    <div>
                        {data.current.uv > 0 && data.current.uv <= 2 && (
                            <div>Low</div>
                        )}
                        {data.current.uv > 2 && data.current.uv <= 5 && (
                            <div>Medium</div>
                        )}
                        {data.current.uv > 5 && data.current.uv <= 7 && (
                            <div>High</div>
                        )}
                        {data.current.uv > 7 && data.current.uv <= 10 && (
                            <div>Very High</div>
                        )}
                        {data.current.uv > 10 && (
                            <div>Extreme</div>
                        )}
                    </div>
                </div>
            )}
            {type === 'dew' && (
                <div className='flex flex-col items-center text-3xl'>
                    <div className='flex items-center'>
                        <WiThermometer size={42} color='#FFF' />
                        <span className='ml-1'>Dew point</span>
                    </div>
                    <div>
                        {data.current.dewpoint_c}°C
                    </div>
                </div>
            )}
            {type === 'wind' && (
                <div className='flex flex-col items-center text-3xl'>
                    <div className='flex items-center'>
                        <WiWindy size={42} color='#FFF' />
                        <span className='ml-1'>Wind</span>
                    </div>
                    <div>
                        {data.current.wind_kph} km/h
                    </div>
                </div>
            )}
            {type === 'cover' && (
                <div className='flex flex-col items-center text-3xl'>
                    <div className='flex items-center'>
                        <WiNightAltCloudyHigh size={42} color='#FFF' />
                        <span className='ml-1'>Cloud cover</span>
                    </div>
                    <div>
                        {data.current.cloud}%
                    </div>
                </div>
            )}
        </div>
    );
}