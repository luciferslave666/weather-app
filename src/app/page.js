'use client';

import { useState } from 'react';
import { FiWind, FiDroplet, FiThermometer, FiSunrise, FiSunset, FiEye } from 'react-icons/fi';

export default function Home() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getBackgroundColor = (weatherMain) => {
    if (!weatherMain) return 'from-gray-700 to-gray-900';
    switch (weatherMain) {
      case 'Clear': return 'from-blue-400 to-sky-600';
      case 'Clouds': return 'from-slate-500 to-slate-700';
      case 'Rain': case 'Drizzle': return 'from-gray-600 to-blue-900';
      case 'Thunderstorm': return 'from-gray-800 to-indigo-900';
      case 'Snow': return 'from-slate-300 to-cyan-400';
      case 'Mist': case 'Fog': return 'from-stone-400 to-stone-600';
      default: return 'from-gray-700 to-gray-900';
    }
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  const getWeather = async (e) => {
    e.preventDefault();
    if (!city) return;

    setLoading(true);
    setError(null);
    setWeather(null);

    try {
      const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=id`;
      const response = await fetch(url);
      if (!response.ok) throw new Error('Kota tidak ditemukan. Coba lagi.');
      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const backgroundClass = getBackgroundColor(weather?.weather[0].main);

  return (
    <main className={`min-h-screen flex flex-col items-center justify-center p-4 transition-all duration-500 bg-gradient-to-br ${backgroundClass}`}>
      <div className="w-full max-w-md bg-white/20 backdrop-blur-lg rounded-xl shadow-2xl p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-white">Aplikasi Cuaca 🌦️</h1>
        
        <form onSubmit={getWeather} className="flex mb-4">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Masukkan nama kota..."
            className="flex-grow p-3 rounded-l-lg bg-white/30 text-white placeholder-gray-200 border-none focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold p-3 rounded-r-lg transition-colors" disabled={loading}>
            {loading ? '...' : 'Cari'}
          </button>
        </form>

        {loading && (
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
          </div>
        )}
        {error && <p className="text-center text-red-300 bg-red-900/50 p-3 rounded-lg">{error}</p>}
        
        <div className={`transition-opacity duration-500 ${weather ? 'opacity-100' : 'opacity-0'}`}>
          {weather && (
            <div className="text-white text-center">
              <h2 className="text-4xl font-semibold">{weather.name}, {weather.sys.country}</h2>
              <p className="capitalize text-xl mt-1">{weather.weather[0].description}</p>
              <div className="flex items-center justify-center my-6">
                <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt={weather.weather[0].description} className="w-32 h-32 -ml-4"/>
                <div className="ml-2 text-left">
                  <p className="text-7xl font-bold">{Math.round(weather.main.temp)}°C</p>
                  <p className="text-md">Suhu dirasakan: {Math.round(weather.main.feels_like)}°C</p>
                </div>
              </div>
              <div className="bg-black/20 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-left">Detail Cuaca Hari Ini</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-left">
                  <div className="flex items-center"><FiThermometer className="text-2xl mr-2" /><div><p className="opacity-80">Suhu Min/Maks</p><p className="font-bold">{Math.round(weather.main.temp_min)}° / {Math.round(weather.main.temp_max)}°</p></div></div>
                  <div className="flex items-center"><FiDroplet className="text-2xl mr-2" /><div><p className="opacity-80">Kelembapan</p><p className="font-bold">{weather.main.humidity}%</p></div></div>
                  <div className="flex items-center"><FiWind className="text-2xl mr-2" /><div><p className="opacity-80">Kecepatan Angin</p><p className="font-bold">{weather.wind.speed.toFixed(1)} m/s</p></div></div>
                  <div className="flex items-center"><FiSunrise className="text-2xl mr-2" /><div><p className="opacity-80">Matahari Terbit</p><p className="font-bold">{formatTime(weather.sys.sunrise)}</p></div></div>
                  <div className="flex items-center"><FiSunset className="text-2xl mr-2" /><div><p className="opacity-80">Matahari Terbenam</p><p className="font-bold">{formatTime(weather.sys.sunset)}</p></div></div>
                  <div className="flex items-center"><FiEye className="text-2xl mr-2" /><div><p className="opacity-80">Jarak Pandang</p><p className="font-bold">{(weather.visibility / 1000).toFixed(1)} km</p></div></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}