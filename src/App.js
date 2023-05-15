import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";


import Login from './pages/Login';
import Register from './pages/Register';
import Chat from './pages/Chat';
import SetAvatar from './pages/SetAvatar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="/" element={<Chat />} />
           <Route path="setAvatar" element={<SetAvatar />} />
          {/* <Route path="*" element={<Erreur/>} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}



export default App;
