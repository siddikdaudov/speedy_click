import { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Text, Animated, Easing } from 'react-native';
import { RootStackScreenProps } from '../navigation/types';
import Bubbles from '../components/Bubbles';
import PoolSVG from '../assets/icons/pool.svg';
import Grid from '../components/Grid';
import Timer from '../components/Timer';
import BackgroundLayout from '../components/BackgroundLayout';
import Dialog from '../components/Dialog';
import Button from '../components/Button';
import Countdown from '../components/Countdown';
import { useBackHandler } from '../hooks/useBackHandler';
import { useNavigation, useRoute } from '@react-navigation/native';
import { GAME_TYPES } from '../constants';

const timerValue = 200;
const oneSecond = 1000;
const bonusTime = 1500;

const GameScreen = (): JSX.Element => {
  const { navigate } = useNavigation<RootStackScreenProps<'Home'>['navigation']>();
  const {
    params: { type: gameType },
  } = useRoute<RootStackScreenProps<'Game'>['route']>();
  const [isOpen, setOpen] = useState<boolean>(false);
  const [isFinish, setFinish] = useState<boolean>(false);
  const timerAnimation = useRef(new Animated.Value(timerValue)).current;
  const prizeCoins = useRef(0);
  const showTimer = gameType === GAME_TYPES.coins || gameType === GAME_TYPES.timer || false;
  let duration = 15000;

  const animateTimer = () => {
    Animated.timing(timerAnimation, {
      toValue: 0,
      duration,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start(({ finished }) => {
      if (finished) finishGame();
    });
  };

  const resetTimer = () => {
    timerAnimation.stopAnimation((value) => {
      const remainingTime = Math.floor(value) / (timerValue / 10);
      if (value < timerValue) {
        duration = remainingTime * oneSecond + bonusTime;
        timerAnimation.setValue(Math.floor(value) + 25);
      } else {
        duration = 15000;
        timerAnimation.setValue(timerValue);
      }
      animateTimer();
    });
  };

  const stopTimer = () => {
    timerAnimation.stopAnimation();
  };

  const startCountdown = () => {};

  const handleNavigate = () => {
    navigate('Home');
  };

  const continueGame = () => {
    setOpen(false);
    animateTimer();
  };

  const finishGame = () => {
    setFinish(true);
  };

  const repeatGame = () => {
    prizeCoins.current = 0;
    duration = 15000;
    timerAnimation.setValue(timerValue);
  };

  useBackHandler(() => {
    if (!isOpen) {
      setOpen(true);
      stopTimer();
      return true;
    }
    return false;
  });

  return (
    <BackgroundLayout>
      <Countdown show={showTimer} startAnimateTimer={animateTimer} />
      <View style={styles.wrapper}>
        <View style={styles.sections}>
          <View style={styles.top}>{showTimer && <Timer timerAnimation={timerAnimation} />}</View>
          <Bubbles />
        </View>
        <View style={styles.sections}>
          <View style={styles.pool}>
            <PoolSVG style={styles.poolSVG} />
            <Grid style={styles.ducks} resetTimer={resetTimer} prizeCoins={prizeCoins} />
          </View>
        </View>
      </View>
      <Dialog isOpen={isOpen}>
        <View style={styles.dialog}>
          <Text style={styles.dialogTitle}>Вы точно хотите выйти в главное меню?</Text>
          <View style={styles.buttons}>
            <Button title='Да' onPress={handleNavigate} style={{ flex: 1 }} />
            <Button title='Нет' onPress={continueGame} style={{ flex: 1 }} />
          </View>
        </View>
      </Dialog>
      <Dialog isOpen={isFinish}>
        <View style={styles.dialog}>
          <Text style={styles.dialogTitle}>
            Вы заработали <Text style={{ color: '#ffc231' }}>{prizeCoins.current}</Text> монет
          </Text>
          <View style={styles.buttons}>
            <Button title='🔁' onPress={repeatGame} style={{ flex: 1 }} />
            <Button title='Выйти' onPress={handleNavigate} style={{ flex: 1 }} />
          </View>
        </View>
      </Dialog>
    </BackgroundLayout>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  sections: {
    flex: 0.5,
  },
  top: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  pool: {
    position: 'relative',
  },
  poolSVG: {
    alignSelf: 'center',
    transform: [{ scale: 1.2 }, { translateY: -35 }],
  },
  ducks: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dialog: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    paddingHorizontal: 20,
    paddingTop: 30,
    elevation: 4,
    borderRadius: 25,
  },
  dialogTitle: {
    fontFamily: 'RussoOne-Regular',
    fontSize: 20,
    color: '#15a0d1',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttons: {
    flexDirection: 'row',
    gap: 30,
  },
});

export default GameScreen;
