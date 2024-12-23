import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginRegister from './pages/LoginRegister';
import Notes from './pages/Notes';

function App() {
  

  return (
    <>
      <div className="app" id='app '>
        <div className="container" id='container'>
          <Router>
            <Routes>
              <Route path="/login" element={<LoginRegister />} />
              <Route path="/" element={<Notes />} />
            </Routes>
          </Router>
        </div>
      </div>
    </>
  );
}

export default App
