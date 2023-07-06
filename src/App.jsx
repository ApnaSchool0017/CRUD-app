import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Add from './components/user/Add';
import Edit from './components/user/Edit';
import Users from './components/user/Users';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route  path="/" exact element={<Home/>} />
        <Route  path="/home" exact element={<Home/>} />
        <Route  path="/users/:id" exact element={<Users/>} />
        <Route  path="/add-user" exact element={<Add/>} />
        <Route  path="/edit-user/:id" exact element={<Edit/>} />
      </Routes>
    </div>
  );
}

export default App;