// import daisyui from 'daisyui'
import {Routes,Link,Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import SignUp from './components/SignUp';
import Login from './components/Login';
import './App.css';
import TailwindTest from './components/TailwindTest';


function App() {
  return (
    <>
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
      <Route path="/" element={<HomePage  />}/>
        <Route path="/register" element={<SignUp  />}/>
        <Route path="/login" element={<Login  />}/>
        <Route path="/test" element={<TailwindTest />}/>
      </Routes>
     
    </div>
    </>
  );
}

export default App;
