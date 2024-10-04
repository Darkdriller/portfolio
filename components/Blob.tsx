import React from 'react';

const Blob: React.FC = () => {
  return (
    <div className="absolute right-0 top-0 w-full h-screen overflow-hidden">
      <div className="absolute -right-[15%] top-[5%] w-[600px] h-[50%] rounded-full bg-purple-400 filter blur-[300px] opacity-50 animate-breath" />
    </div>
  );
};

export default Blob;