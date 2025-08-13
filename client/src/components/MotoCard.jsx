import React from 'react';

const MotoCard = ({ name, brand, imageUrl }) => {
  return (
    <div className="bg-slate-800 rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
      <img src={imageUrl} alt={`Moto ${name}`} className="w-full h-56 object-cover" />
      <div className="p-4 text-white">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-slate-400">{brand}</p>
      </div>
    </div>
  );
};

export default MotoCard;