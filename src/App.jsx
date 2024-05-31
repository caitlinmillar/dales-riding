import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/reducers/store';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ROUTES } from './constants';
import Navbar from './components/navbar';
import Riding from './pages/riding';
import Horses from './pages/horses';
import Garden from './pages/garden';
import Pellets from './pages/pellets';
import Racing from './pages/racing';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navbar />
        <Router>
          <Routes>
            <Route path={ROUTES.HOME} element={<Home />}/>
            <Route path={ROUTES.RIDING} element={<Riding />}/>
            <Route path={ROUTES.HORSES} element={<Horses />}/>
            <Route path={ROUTES.GARDEN} element={<Garden />}/>
            <Route path={ROUTES.PELLETS} element={<Pellets />}/>
            <Route path={ROUTES.RACING} element={<Racing />}/>
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
