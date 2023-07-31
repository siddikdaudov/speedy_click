import { StyleSheet, View } from 'react-native';
import BackgroundLayout from '../components/BackgroundLayout';
import Bubbles from '../components/Bubbles';
import Button from '../components/Button';

const HomeScreen = (): JSX.Element => {
  const handleEarnCoins = () => {
    console.log('Кнопка нажата');
  };

  return (
    <BackgroundLayout>
      <View style={styles.wrapper}>
        <View style={styles.sections}>
          <Bubbles />
        </View>
        <View style={styles.sections}>
          <Button title='Заработать монеты' onPress={handleEarnCoins} />
        </View>
      </View>
    </BackgroundLayout>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  sections: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
