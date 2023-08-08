import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import BackgroundLayout from '../components/BackgroundLayout';
import Bubbles from '../components/Bubbles';
import Button from '../components/Button';
import { useNavigation } from '@react-navigation/native';
import { RootStackScreenProps } from '../navigation/types';
import LottieView from 'lottie-react-native';

const HomeScreen = (): JSX.Element => {
  const { navigate } = useNavigation<RootStackScreenProps<'Game'>['navigation']>();

  const handleEarnCoins = () => {
    navigate('Game');
  };

  return (
    <BackgroundLayout>
      <View style={styles.wrapper}>
        <View style={styles.sections}>
          <Bubbles />
        </View>
        <View style={styles.sections}>
          <View style={styles.frame}>
            <View style={styles.button}>
              <LottieView
                source={require('../assets/lottie/coin.json')}
                autoPlay
                loop
                style={{ width: 80, height: 80, bottom: 5 }}
              />
              <Button title='Заработать монеты' onPress={handleEarnCoins} style={{ flex: 1 }} />
            </View>
            <View style={styles.button}>
              <LottieView
                source={require('../assets/lottie/timer.json')}
                autoPlay
                loop
                style={{ width: 80, height: 80, bottom: 5 }}
              />
              <Button title='Режим с таймером' onPress={() => null} style={{ flex: 1 }} />
            </View>
            <View style={styles.button}>
              <LottieView
                source={require('../assets/lottie/infinity.json')}
                autoPlay
                loop
                style={{ width: 80, height: 80, bottom: 5 }}
              />
              <Button title='Бесконечный режим' onPress={() => null} />
            </View>
          </View>
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
  frame: {
    bottom: 30,
  },
  button: {
    flexDirection: 'row',
    gap: 30,
  },
});

export default HomeScreen;
