import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from '../src/components/AppRouter.js';
function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
