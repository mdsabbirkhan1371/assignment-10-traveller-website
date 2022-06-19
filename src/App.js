import logo from './logo.svg';
import './App.css';
import Header from './Pages/Header/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login/Login';
import Services from './Pages/Services/Services';
import SignUP from './Pages/SignUP/SignUP';
import Error from './Pages/Error/Error';
import Footer from './Pages/Footer/Footer/Footer';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Checkout from './Pages/Checkout/Checkout';
import Blogs from './Pages/Blogs/Blogs';
import AboutMe from './Pages/AboutMe/AboutMe';

function App() {
  return (
    <div>

      <Header></Header>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUP></SignUP>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetails></ServiceDetails>}></Route>
        <Route path='/aboutme' element={<AboutMe></AboutMe>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/checkout' element={<RequireAuth>
          <Checkout></Checkout>
        </RequireAuth>}></Route>
        <Route path='*' element={<Error></Error>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
