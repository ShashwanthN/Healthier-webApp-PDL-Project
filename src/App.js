import logo from './logo.svg';
import './App.css';
import Login from "./pages/Login"
import {Routes, Route} from "react-router-dom"
import Profile from './pages/Profile';
import Home from './pages/Home';

const App = () => {
  return (
    <div>
      <Login/>
        {/* <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/Profile' element={<Profile />} />
        </Routes> */}
    </div>
  );
}

export default App;
