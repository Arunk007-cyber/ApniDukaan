
import React from 'react';

const Menubar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='py-4 px-8 mx-[8rem]'>
      <ul className='flex space-x-10'>
        <li className='flex items-center justify-center w-28 shadow-xl border border-gray-300 rounded-full p-2 text-white-800 font-semibold cursor-pointer hover:bg-green-500 transition duration-200' onClick={() => scrollToSection('allItems')}>All Items</li>
        <li className='flex items-center justify-center w-28 shadow-xl border border-gray-300 rounded-full p-2 text-gray-800 font-semibold cursor-pointer hover:bg-green-500 transition duration-200' onClick={() => scrollToSection('drinks')}>Drinks</li>
        <li className='flex items-center justify-center w-28 shadow-xl border border-gray-300 rounded-full p-2 text-gray-800 font-semibold cursor-pointer hover:bg-green-500 transition duration-200' onClick={() => scrollToSection('fruits')}>Fruits</li>
        <li className='flex items-center justify-center w-28 shadow-xl border border-gray-300 rounded-full p-2 text-gray-800 font-semibold cursor-pointer hover:bg-green-500 transition duration-200' onClick={() => scrollToSection('bakery')}>Bakery</li>
      </ul>
    </div>
  );
};

export default Menubar;
