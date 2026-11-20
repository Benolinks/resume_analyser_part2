
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Logout from './pages/logout';
import Login from './pages/login';

import Home from './pages/homepage';
import Records from './pages/recordpage';
// import Logout from './logout';
const App = () => {
  return (
    <div  className='bg-linear-to-r from-gray-50 via-blue-100 to-blue-50'>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/records' element={<Records/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/logout' element={<Logout/>}/>
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
