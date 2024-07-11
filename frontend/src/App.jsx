import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Signup from './pages/Signup.jsx';
import Signin from './pages/Signin.jsx';
import Home from './pages/Home.jsx';
import Start from './pages/Start.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx'

function App() {

  return (
    <div>
      <BrowserRouter>
    <Routes>
        <Route path='/' element={<Start />}/>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/signin' element={<Signin />}></Route>
        <Route path='/home' element={<ProtectedRoute><Home /></ProtectedRoute>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App