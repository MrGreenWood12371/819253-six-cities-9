import { AppRoute, AuthorizationStatus } from '../../const';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import FavoritesScreen from '../../pages/favorites/favorites-screen/favorites-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import MainPageScreen from '../../pages/main/main-page-screen/main-page-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import PropertyScreen from '../../pages/property/property-screen/property-screen';

type AppScreenProps = {
  placesCount: number;
};

function App({placesCount}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <MainPageScreen placesCount={placesCount}/>
          }
        />
        <Route
          path={AppRoute.Login}
          element={
            <LoginScreen/>
          }
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <FavoritesScreen/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Room}
          element={
            <PropertyScreen/>
          }
        />
        <Route
          path='*'
          element={
            <NotFoundScreen/>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
