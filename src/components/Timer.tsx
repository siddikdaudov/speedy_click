import { useRef, useEffect, useState } from 'react';
import { View, Animated, StyleSheet, Button, Easing, Image } from 'react-native';
import DuckHeadSVG from '../assets/icons/duckHead.svg';

const timerValue = 200;
const oneSecond = 1000;
const bonusTime = 1000;

const Timer = () => {
  let duration = 10000;
  const timerAnimation = useRef(new Animated.Value(timerValue)).current;

  const animate = () => {
    Animated.timing(timerAnimation, {
      toValue: 0,
      duration,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start(({ finished }) => {
      console.log('finished');
    });
  };

  const reset = () => {
    timerAnimation.stopAnimation((value) => {
      const remainingTime = Math.floor(value) / (timerValue / 10);
      if (value < timerValue) {
        duration = remainingTime * oneSecond + bonusTime;
        timerAnimation.setValue(Math.floor(value) + 20);
      } else {
        duration = 10000;
        timerAnimation.setValue(timerValue);
      }
      animate();
    });
  };

  return (
    <View style={styles.wrapper}>
      <Animated.View style={[styles.indicator, { transform: [{ translateX: timerAnimation }] }]}>
        <DuckHeadSVG />
      </Animated.View>
      <View style={[styles.point, { left: 50, height: 7 }]} />
      <View style={styles.point} />
      <View style={[styles.point, { left: 150, height: 7 }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: 200,
    height: 20,
    backgroundColor: '#FFCE43',
    flexDirection: 'row',
    alignItems: 'flex-end',
    borderRadius: 10,
    position: 'relative',
    borderWidth: 2,
    borderColor: '#383838',
  },
  indicator: {
    right: 15.5,
    top: 3,
    zIndex: 1,
  },
  point: {
    width: 2,
    height: 12,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    backgroundColor: '#383838',
    position: 'absolute',
    left: 100,
  },
});

export default Timer;
