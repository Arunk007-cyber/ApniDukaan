import React, { useState, useEffect } from 'react';

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); 
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-25 z-50 flex items-center justify-center">
          <div className="animate-spin rounded-full h-24 w-24 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      )}
    </>
  );
};

export default Loader;
