# Rede Profissional - O Futuro do Trabalho

Uma aplicação web colaborativa inspirada no LinkedIn, desenvolvida para conectar profissionais de diferentes áreas, incentivando o desenvolvimento de competências, a troca de experiências e a colaboração entre talentos.

## 🎯 Objetivo

Desenvolver uma Single Page Application (SPA) que apresente uma listagem de profissionais fictícios e permita visualizar informações completas de cada perfil, utilizando HTML, React e Tailwind CSS.

## ✨ Funcionalidades

- **Cards de Profissionais**: Exibição de dados básicos (nome, foto, cargo e principais skills)
- **Modal Interativa**: Visualização detalhada de cada perfil com:
  - Informações pessoais e acadêmicas
  - Experiências e habilidades técnicas
  - Soft skills e hobbies
  - Certificações e idiomas
  - Projetos e áreas de interesse
  - Botões de ação funcionais: "Recomendar profissional" e "Enviar mensagem"
- **Sistema de Busca e Filtros**: 
  - Busca por nome ou cargo
  - Filtros por área, cidade ou tecnologia
- **Dark Mode**: Alternância entre tema claro e escuro
- **Design Responsivo**: Interface adaptável para diferentes tamanhos de tela
- **Dados Simulados**: 60+ perfis de profissionais em arquivo JSON local

## 🛠️ Tecnologias Utilizadas

- **React 19.2.0**: Biblioteca JavaScript para construção de interfaces
- **Tailwind CSS 4.1.17**: Framework CSS utility-first
- **Vite 7.2.2**: Build tool e dev server
- **HTML5**: Estrutura semântica

## 📦 Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd React
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

4. Acesse a aplicação no navegador:
```
http://localhost:5173
```

## 📁 Estrutura do Projeto

```
React/
├── src/
│   ├── components/
│   │   ├── ProfissionalCard.jsx    # Card de exibição do profissional
│   │   ├── ModalPerfil.jsx         # Modal com detalhes completos
│   │   ├── BuscaFiltros.jsx        # Componente de busca e filtros
│   │   └── DarkModeToggle.jsx      # Toggle para dark mode
│   ├── data/
│   │   └── profissionais.json      # Dados dos 60+ profissionais
│   ├── App.jsx                     # Componente principal
│   ├── App.css                     # Estilos customizados
│   ├── main.jsx                    # Ponto de entrada
│   └── index.css                   # Estilos globais com Tailwind
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 📊 Estrutura dos Dados (JSON)

Cada perfil contém as seguintes propriedades:

- `id`: Identificador único
- `nome`: Nome completo
- `foto`: URL da foto do perfil
- `cargo`: Cargo atual / título profissional
- `resumo`: Bio curta / headline profissional
- `localizacao`: Cidade / Estado
- `area`: Área / setor (ex: Desenvolvimento, Design, TI)
- `habilidadesTecnicas`: Array de hard skills / tecnologias
- `softSkills`: Array de soft skills
- `experiencias`: Array de objetos com histórico de trabalho
- `formacao`: Array de objetos com formação acadêmica
- `projetos`: Array de objetos com portfólio / projetos
- `certificacoes`: Array de certificações relevantes
- `idiomas`: Array de objetos com idiomas e níveis
- `areaInteresses`: Array de tópicos de interesse

## 🎨 Recursos de Design

- Interface moderna e limpa
- Animações suaves de transição
- Cards com efeito hover
- Modal responsivo e acessível
- Paleta de cores consistente
- Suporte completo a dark mode

## 🚀 Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento
- `npm run build`: Cria a build de produção
- `npm run preview`: Visualiza a build de produção
- `npm run lint`: Executa o linter

## 📝 Commits

O projeto possui mais de 10 commits organizados, documentando cada etapa do desenvolvimento.

## 👥 Autor

Desenvolvido para o desafio Global Solution - O Futuro do Trabalho.

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais.
