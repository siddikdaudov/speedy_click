import { StatusBar } from 'react-native';
import MainStack from './src/navigation/MainStack';
import { NavigationContainer } from '@react-navigation/native';

const MyApp = (): JSX.Element => {
  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={'#FFB58E'} />
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </>
  );
};

const App = (): JSX.Element => {
  return <MyApp />;
};

export default App;
