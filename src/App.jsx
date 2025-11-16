import { useState, useEffect, useMemo } from 'react';
import profissionaisData from './data/profissionais.json';
import ProfissionalCard from './components/ProfissionalCard';
import ModalPerfil from './components/ModalPerfil';
import BuscaFiltros from './components/BuscaFiltros';
import DarkModeToggle from './components/DarkModeToggle';

function App() {
  const [profissionais, setProfissionais] = useState([]);
  const [profissionalSelecionado, setProfissionalSelecionado] = useState(null);
  const [modalAberto, setModalAberto] = useState(false);
  const [busca, setBusca] = useState('');
  const [filtroArea, setFiltroArea] = useState('');
  const [filtroCidade, setFiltroCidade] = useState('');
  const [filtroTecnologia, setFiltroTecnologia] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  // Carregar dados
  useEffect(() => {
    setProfissionais(profissionaisData);
  }, []);

  // Gerenciar dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Extrair valores únicos para filtros
  const areas = useMemo(() => {
    const areasUnicas = [...new Set(profissionais.map((p) => p.area))];
    return areasUnicas.sort();
  }, [profissionais]);

  const cidades = useMemo(() => {
    const cidadesUnicas = [...new Set(profissionais.map((p) => p.localizacao))];
    return cidadesUnicas.sort();
  }, [profissionais]);

  const tecnologias = useMemo(() => {
    const techsUnicas = new Set();
    profissionais.forEach((p) => {
      p.habilidadesTecnicas.forEach((tech) => techsUnicas.add(tech));
    });
    return Array.from(techsUnicas).sort();
  }, [profissionais]);

  // Filtrar profissionais
  const profissionaisFiltrados = useMemo(() => {
    return profissionais.filter((prof) => {
      // Busca por nome ou cargo
      const matchBusca =
        busca === '' ||
        prof.nome.toLowerCase().includes(busca.toLowerCase()) ||
        prof.cargo.toLowerCase().includes(busca.toLowerCase());

      // Filtro por área
      const matchArea = filtroArea === '' || prof.area === filtroArea;

      // Filtro por cidade
      const matchCidade = filtroCidade === '' || prof.localizacao === filtroCidade;

      // Filtro por tecnologia
      const matchTecnologia =
        filtroTecnologia === '' ||
        prof.habilidadesTecnicas.includes(filtroTecnologia);

      return matchBusca && matchArea && matchCidade && matchTecnologia;
    });
  }, [profissionais, busca, filtroArea, filtroCidade, filtroTecnologia]);

  const abrirModal = (profissional) => {
    setProfissionalSelecionado(profissional);
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
    setProfissionalSelecionado(null);
  };

  const handleRecomendar = () => {
    alert(`Você recomendou ${profissionalSelecionado?.nome}!`);
  };

  const handleEnviarMensagem = () => {
    alert(`Mensagem enviada para ${profissionalSelecionado?.nome}!`);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
      <DarkModeToggle darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />

      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-md">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
            Rede Profissional - O Futuro do Trabalho
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-400 mt-2">
            Conectando pessoas, competências e propósito por meio da tecnologia
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Busca e Filtros */}
        <BuscaFiltros
          busca={busca}
          setBusca={setBusca}
          filtroArea={filtroArea}
          setFiltroArea={setFiltroArea}
          filtroCidade={filtroCidade}
          setFiltroCidade={setFiltroCidade}
          filtroTecnologia={filtroTecnologia}
          setFiltroTecnologia={setFiltroTecnologia}
          areas={areas}
          cidades={cidades}
          tecnologias={tecnologias}
        />

        {/* Contador de resultados */}
        <div className="mb-4 text-gray-600 dark:text-gray-400">
          <p>
            Mostrando {profissionaisFiltrados.length} de {profissionais.length} profissionais
          </p>
        </div>

        {/* Grid de Cards */}
        {profissionaisFiltrados.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {profissionaisFiltrados.map((profissional) => (
              <ProfissionalCard
                key={profissional.id}
                profissional={profissional}
                onClick={() => abrirModal(profissional)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Nenhum profissional encontrado com os filtros selecionados.
            </p>
          </div>
        )}
      </main>

      {/* Modal */}
      <ModalPerfil
        profissional={profissionalSelecionado}
        isOpen={modalAberto}
        onClose={fecharModal}
        onRecomendar={handleRecomendar}
        onEnviarMensagem={handleEnviarMensagem}
      />

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-12">
        <div className="container mx-auto px-4 py-6 text-center text-gray-600 dark:text-gray-400">
          <p>© 2024 Rede Profissional - Desenvolvido para Global Solution</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
