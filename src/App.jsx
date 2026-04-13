import { Routes, Route } from 'react-router-dom'  
import './App.css'
import Home from './pages/Home.jsx'
import Auth from './pages/Auth.jsx'
import Cart from './pages/Cart.jsx'
import Navbar from './components/Navbar.jsx'
import AuthProvider from './context/AuthContext.jsx'


function App() {
  

  return (
    <AuthProvider>
  <div className="app">
    <Navbar />
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/auth" element={<Auth/>} />
    <Route path="/cart" element={<Cart/>}  />
    </Routes> 
    </div>
    </AuthProvider>
  )
}

export default App
