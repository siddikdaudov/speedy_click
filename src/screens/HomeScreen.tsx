import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import BackgroundLayout from '../components/BackgroundLayout';
import Bubbles from '../components/Bubbles';
import Button from '../components/Button';
import { useNavigation } from '@react-navigation/native';
import { RootStackScreenProps } from '../navigation/types';

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
            <Button title='Заработать монеты' onPress={handleEarnCoins} />
            <Button title='Режим с таймером' onPress={() => null} />
            <Button title='Бесконечный режим' onPress={() => null} />
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
    padding: 30,
    bottom: 30,
  },
});

export default HomeScreen;
