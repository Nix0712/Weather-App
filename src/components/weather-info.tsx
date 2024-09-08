
import { WeatherInfo } from '../definitions';
import { conditionCodes } from '../conditionCodes';

export default function WeatherStats({ data }: { data: WeatherInfo }) {
    const condition = conditionCodes.find(item => item.code === data.current.condition.code);
    var nightCondition;
    if (data.current.is_day === 0)
        nightCondition = condition?.night;
    else
        nightCondition = condition?.day;
    return (
        <div className='flex flex-col h-full justify-between'>
            <div>
                <div className='flex'>
                    <div className='p-2 text-5xl'>{data?.current.temp_c}°C</div>
                    <img src={data.current.condition.icon} alt="weather icon" className='p-2' />
                </div>
                <div className='p-2 text-2xl'>{nightCondition}</div>

            </div>
            <div className='p-2 text-2xl flex justify-center'>
                <div>
                    <div>Feels like: {data.current.feelslike_c}°C</div>
                </div>
            </div>
        </div>
    );
}