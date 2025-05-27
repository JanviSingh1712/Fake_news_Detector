import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [news, setNews] = useState('');
  const navigate = useNavigate();

 
  const isLoggedIn = localStorage.getItem('token') !== null;

  const handleInputChange = (e) => {
    setNews(e.target.value);
  };

  const handleArrowClick = () => {
    if (isLoggedIn) {
      navigate('/detect', { state: { newsText: news } });
    } else {
      navigate('/login');
    }
  };

  return React.createElement(
    'div',
    { className: 'flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4' },

    React.createElement(
      'h1',
      { className: 'text-3xl font-bold mb-6 text-center text-gray-800' },
      'Fake News Detector'
    ),

    React.createElement(
      'textarea',
      {
        className: 'w-full max-w-2xl h-40 p-4 border-2 border-gray-300 rounded-lg shadow-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400',
        placeholder: 'Paste your news article or snippet here...',
        value: news,
        onChange: handleInputChange
      }
    ),

    React.createElement(
      'button',
      {
        onClick: handleArrowClick,
        className: 'flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition'
      },
      'Check',
      React.createElement('span', { className: 'text-xl' }, '➡️')
    )
  );
}

export default Home;
