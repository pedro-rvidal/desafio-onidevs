// Importação de aqruivos de estilização, componentes criados e ferramentas
import './App.css';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

//Definição da funcionalidade do componente App
function App() {
  return (
    <Router>
      <div className="main">
        {/* Titulo da aplicação apresentado em todas as páginas */}
        <h2 className="main-header">Gestor de Artistas do Catálogo Musical</h2> 
        <Routes>
          {/* Definição das rotas da aplicação e os componentes que serão apresentados em cada uma delas */ }
          <Route exact path="/" element={<Read />} />
          <Route path="/create" element={<Create />} />
          <Route exact path='/read' element={<Read />} />
          <Route path='/update' element={<Update />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
