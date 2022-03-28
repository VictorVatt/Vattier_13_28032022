import '../styles/App.css';
import Home from '../Pages/Home';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import SignInPage from '../Pages/SignInPage';
import User from '../Pages/User';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />  
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signin' element={<SignInPage />} />
            <Route path='/user' element={<User />} />
          </Routes>
        <Footer />
      
      </BrowserRouter>
    </div>
  );
}

export default App;
