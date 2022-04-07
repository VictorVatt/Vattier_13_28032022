import '../styles/App.css';
import Home from '../Pages/Home';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import SignInPage from '../Pages/SignInPage';
import User from '../Pages/User';
import { useSelector } from 'react-redux';
import { selectUserLogin } from '../Utils/selectors';
import { BrowserRouter, Route , Routes } from 'react-router-dom';
import RememberLogin from '../Utils/RememberLogin';

function App() {
  const connected = useSelector(selectUserLogin) // retrieve the connected state

  RememberLogin() // call the remember login function 


  return (
    <div className="App">
      <BrowserRouter>
        <Header />  
          <Routes>
            <Route path='/' element={<Home />} />
            {connected ? ( // if connected only allow the profile route 
              <Route exact path='/profile' element={<User />} />
            ) : // if not connected only allow signIn route
            (
              <Route exact path='/signin' element={<SignInPage />} />
            )}
            <Route exact path='*' element={<Home />} />
          </Routes>
        <Footer />
      
      </BrowserRouter>
    </div>
  );
}

export default App;
