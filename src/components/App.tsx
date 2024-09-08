import React from 'react';
import { MapPinIcon } from '@heroicons/react/24/outline';
import WeatherStats from './weather-info';
import SingleInfo from './single-info';
import { useState, useEffect } from 'react';
import { fetchWeather } from '../data';
import { WeatherInfo } from '../definitions';
import { defaultWeather } from '../defaultData';
import { Suspense } from 'react';



function App() {
  const [weather, setWeather] = useState<WeatherInfo>(defaultWeather);
  const [location, setLocation] = useState<string>('');
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    fetchWeather(location).then((data) => {
      setWeather(data);
      setLocation(data.location.name);
    });
  }, []);

  const handleLocationChange = () => {
    fetchWeather(inputValue).then((data) => {
      setWeather(data);
      var locationName = data.location.name;
      if (locationName.length > 10) {
        locationName = locationName.substring(0, 10) + '...';
      }
      setLocation(locationName);
    }).catch((err) => {
      setLocation('Unknown');
    });
  };

  return (
    <div className="h-screen w-screen bg-back-sky bg-cover bg-center text-slate-200 relative">
      <div className="absolute inset-1 bg-back-sky bg-cover bg-center blur-lg" ></div>
      <div className="flex h-full overflow-y-auto">
        <div className='w-full h-full p-5'>
          <div className='bg-black/8 flex flex-col mb-2 justify-center items-center row-span-4 backdrop-blur-md rounded-3xl p-10 shadow-[rgba(0,0,0,0.2)_0px_0px_100px_0px] sm:flex-row sm:justify-between'>
            <div className='flex'>
              <MapPinIcon title='Location' className="h-10 w-10" />
              <Suspense fallback={`<span>Loading...<span/>`}>
                <span className="ml-2 text-4xl">{location}</span>
              </Suspense>
            </div>
            <div className='flex flex-col p-2 sm:flex-row'>
              <input type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleLocationChange();
                  }
                }}
                placeholder="Enter location" className="p-2 mt-2 mx-4 rounded-lg focus:outline-none bg-inherit border" />
              <button onClick={handleLocationChange} className='border p-2 mt-2 rounded-md hover:bg-gray-100/30'>Change Location</button>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="bg-black/8 overflow-y-auto grow m-5 min-h-[300px] backdrop-blur-2xl rounded-3xl p-8 shadow-[rgba(0,0,0,0.2)_0px_0px_100px_0px]">
              <WeatherStats data={weather} />
            </div>

            <div className='grow'>
              <div className="bg-black/8  overflow-y-auto grow max-h-[150px] m-5 backdrop-blur-2xl rounded-3xl p-8 shadow-[rgba(0,0,0,0.2)_0px_0px_100px_0px]">
                <SingleInfo data={weather} type='humidity' />
              </div>
              <div className="bg-black/8  overflow-y-auto grow max-h-[150px] m-5 backdrop-blur-2xl rounded-3xl p-8 shadow-[rgba(0,0,0,0.2)_0px_0px_100px_0px]">
                <SingleInfo data={weather} type='pressure' />
              </div>
            </div>

            <div className='grow'>
              <div className="bg-black/8  overflow-y-auto grow max-h-[150px] m-5 backdrop-blur-2xl rounded-3xl p-8 shadow-[rgba(0,0,0,0.2)_0px_0px_100px_0px]">
                <SingleInfo data={weather} type='uv' />
              </div>
              <div className="bg-black/8  overflow-y-auto grow max-h-[150px] m-5 backdrop-blur-2xl rounded-3xl p-8 shadow-[rgba(0,0,0,0.2)_0px_0px_100px_0px]">
                <SingleInfo data={weather} type='pressure' />
              </div>
            </div>

            <div className="bg-black/8 grow m-5 backdrop-blur-2xl rounded-3xl p-8 shadow-[rgba(0,0,0,0.2)_0px_0px_100px_0px]">
              <WeatherStats data={weather} />
            </div>
            <div className="bg-black/8 grow m-5 backdrop-blur-2xl rounded-3xl p-8 shadow-[rgba(0,0,0,0.2)_0px_0px_100px_0px]">
              <WeatherStats data={weather} />
            </div>
            <div className="bg-black/8 grow m-5 backdrop-blur-2xl rounded-3xl p-8 shadow-[rgba(0,0,0,0.2)_0px_0px_100px_0px]">
              <WeatherStats data={weather} />
            </div>
            <div className="bg-black/8 grow m-5 backdrop-blur-2xl rounded-3xl p-8 shadow-[rgba(0,0,0,0.2)_0px_0px_100px_0px]">
              <WeatherStats data={weather} />
            </div>
            <div className="bg-black/8 grow m-5 backdrop-blur-2xl rounded-3xl p-8 shadow-[rgba(0,0,0,0.2)_0px_0px_100px_0px]">
              <WeatherStats data={weather} />
            </div>
            1
          </div>

        </div>
      </div>

    </div >
  );
}

export default App;
