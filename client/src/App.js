import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from '../src/components/AppRouter.js';
import NavBar from './components/NavBar';
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
