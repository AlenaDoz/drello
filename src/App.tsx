import { Route, Routes } from 'react-router-dom';
import { ROUTES } from './constants/constants';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Login } from './pages/Login/Login';
import { Registration } from './pages/Registration/Registration';
import { AppBlock, GlobalStyle } from './style';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import { EditProfile } from './pages/EditProfile/EditProfile';

function App() {
  return (
    <>
      <Header />
      <AppBlock>
        <Routes>
          <Route path={ROUTES.registration} element={<Registration />} />
          <Route path={ROUTES.welcomePage} element={<WelcomePage />} />
          <Route path={ROUTES.signIn} element={<Login />} />
          <Route path={ROUTES.editProfile} element={<EditProfile />} />
        </Routes>
      </AppBlock>
      <Footer />
      <GlobalStyle />
    </>
  );
}

export default App;
