import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EnterancePage from './pages/EnterancePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<EnterancePage />} />
        <Route path="/signUp" exact element={<EnterancePage />} />
        <Route path="/login" exact element={<EnterancePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
