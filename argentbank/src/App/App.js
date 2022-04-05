import '../styles/App.css';
import Home from '../Pages/Home';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import SignInPage from '../Pages/SignInPage';
import User from '../Pages/User';
import { useSelector } from 'react-redux';
import { selectUserLogin } from '../Utils/selectors';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

function App() {
  const connected = useSelector(selectUserLogin)
  return (
    <div className="App">
      <BrowserRouter>
        <Header />  
          <Routes>
            <Route path='/' element={<Home />} />
            {connected ? (
              <Route path='/profile' element={<User />} />
            ) :
            (
              <Route path='/signin' element={<SignInPage />} />
            )}
            <Route path='*' element={<Home />} />
          </Routes>
        <Footer />
      
      </BrowserRouter>
    </div>
  );
}

export default App;
