import React from 'react';

// Component for displaying professional profile modal
const ModalPerfil = ({ profissional, isOpen, onClose, onRecomendar, onEnviarMensagem }) => {
  if (!isOpen || !profissional) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 text-white">
          <div className="flex justify-between items-start">
            <div className="flex items-center space-x-4">
              <img
                src={profissional.foto}
                alt={profissional.nome}
                className="w-24 h-24 rounded-full border-4 border-white"
              />
              <div>
                <h2 className="text-2xl font-bold">{profissional.nome}</h2>
                <p className="text-blue-100">{profissional.cargo}</p>
                <p className="text-blue-100 text-sm">{profissional.localizacao}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-200 text-2xl font-bold"
            >
              ×
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Resumo */}
          <section>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Sobre
            </h3>
            <p className="text-gray-700 dark:text-gray-300">{profissional.resumo}</p>
          </section>

          {/* Informações Pessoais e Acadêmicas */}
          <section>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Formação Acadêmica
            </h3>
            <div className="space-y-3">
              {profissional.formacao.map((form, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg"
                >
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {form.curso}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {form.instituicao} - {form.ano}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Experiências */}
          <section>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Experiências Profissionais
            </h3>
            <div className="space-y-3">
              {profissional.experiencias.map((exp, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg border-l-4 border-blue-500"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {exp.cargo}
                      </p>
                      <p className="text-blue-600 dark:text-blue-400">{exp.empresa}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                        {exp.descricao}
                      </p>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
                      {exp.inicio} - {exp.fim}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Habilidades Técnicas */}
          <section>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Habilidades Técnicas
            </h3>
            <div className="flex flex-wrap gap-2">
              {profissional.habilidadesTecnicas.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Soft Skills */}
          <section>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {profissional.softSkills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Certificações */}
          {profissional.certificacoes && profissional.certificacoes.length > 0 && (
            <section>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Certificações
              </h3>
              <div className="space-y-2">
                {profissional.certificacoes.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 text-gray-700 dark:text-gray-300"
                  >
                    <span className="text-yellow-500">★</span>
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Idiomas */}
          {profissional.idiomas && profissional.idiomas.length > 0 && (
            <section>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Idiomas
              </h3>
              <div className="space-y-2">
                {profissional.idiomas.map((idioma, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center bg-gray-50 dark:bg-gray-700 p-3 rounded-lg"
                  >
                    <span className="text-gray-900 dark:text-white font-medium">
                      {idioma.idioma}
                    </span>
                    <span className="text-gray-600 dark:text-gray-300 text-sm">
                      {idioma.nivel}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Projetos */}
          {profissional.projetos && profissional.projetos.length > 0 && (
            <section>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Projetos
              </h3>
              <div className="space-y-3">
                {profissional.projetos.map((projeto, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg"
                  >
                    <a
                      href={projeto.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
                    >
                      {projeto.titulo}
                    </a>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                      {projeto.descricao}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Áreas de Interesse */}
          {profissional.areaInteresses && profissional.areaInteresses.length > 0 && (
            <section>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Áreas de Interesse
              </h3>
              <div className="flex flex-wrap gap-2">
                {profissional.areaInteresses.map((interesse, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm"
                  >
                    {interesse}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Botões de Ação */}
          <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={onRecomendar}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Recomendar Profissional
            </button>
            <button
              onClick={onEnviarMensagem}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Enviar Mensagem
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalPerfil;

