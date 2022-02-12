import MainPageScreen from '../main/main-page-screen/main-page-screen';

type AppScreenProps = {
  placesCount: number;
};

function App({placesCount}: AppScreenProps): JSX.Element {
  return (
    <MainPageScreen placesCount={placesCount}/>
  );
}

export default App;
