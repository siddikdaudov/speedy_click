import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import GameScreen from '../screens/GameScreen';

const Stack = createNativeStackNavigator();

const MainStack = (): JSX.Element => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, animation: 'slide_from_right' }}>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Game' component={GameScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
