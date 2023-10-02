import { FC, useRef, useEffect } from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import DuckHeadSVG from '../assets/icons/duckHead.svg';

type TProps = {
  timerAnimation: Animated.Value;
};

const Timer: FC<TProps> = ({ timerAnimation }) => {
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
