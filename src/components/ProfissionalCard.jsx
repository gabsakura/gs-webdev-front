import React from 'react';

const ProfissionalCard = ({ profissional, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 p-6 border border-gray-200 dark:border-gray-700"
    >
      <div className="flex items-start space-x-4">
        <img
          src={profissional.foto}
          alt={profissional.nome}
          className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
        />
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate">
            {profissional.nome}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
            {profissional.cargo}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            {profissional.localizacao}
          </p>
          <div className="flex flex-wrap gap-2 mt-3">
            {profissional.habilidadesTecnicas.slice(0, 3).map((skill, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
              >
                {skill}
              </span>
            ))}
            {profissional.habilidadesTecnicas.length > 3 && (
              <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full">
                +{profissional.habilidadesTecnicas.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfissionalCard;

