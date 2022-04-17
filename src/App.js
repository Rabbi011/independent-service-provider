
import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Header from './Pages/Common/Header/Header';
import Footer from './Pages/Common/Footer/Footer';
import CheckOuts from './Pages/CheckOuts/CheckOuts';
import NotFound from './Pages/Common/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/service/:serviceId' element={<CheckOuts></CheckOuts>}></Route>
       <Route path='/about' element={<About></About>}></Route>
       <Route path='*' element={<NotFound></NotFound>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
