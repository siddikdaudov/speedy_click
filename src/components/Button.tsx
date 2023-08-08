import { FC, useRef, useEffect } from 'react';
import { Animated, Pressable, View, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native';
const Sound = require('react-native-sound');
Sound.setCategory('Playback');

type TProps = {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};

const Button: FC<TProps> = ({ title, onPress, style }): JSX.Element => {
  const popSound = new Sound('pop.mp3', Sound.MAIN_BUNDLE);
  const animation = useRef(new Animated.Value(0)).current;

  const animationIn = () => {
    popSound.play();
    Animated.timing(animation, {
      toValue: 5,
      duration: 100,
      useNativeDriver: true,
    }).start(() => animationOut());
  };

  const animationOut = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true,
    }).start(() => onPress());
  };

  useEffect(() => {
    return () => popSound.release();
  }, []);

  return (
    <View style={style ?? null}>
      <Animated.View style={[styles.animate, { transform: [{ translateY: animation }] }]}>
        <Pressable onPressIn={animationIn} style={styles.pressable}>
          <Text style={styles.title}>{title}</Text>
        </Pressable>
      </Animated.View>
      <View style={styles.shadow} />
    </View>
  );
};

const styles = StyleSheet.create({
  animate: {
    backgroundColor: '#15A0D1',
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 20,
    zIndex: 1,
  },
  pressable: {
    width: '100%',
  },
  title: {
    fontFamily: 'RussoOne-Regular',
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
  shadow: {
    backgroundColor: '#FFB58E',
    borderRadius: 30,
    transform: [{ translateY: -45 }],
    paddingVertical: 25,
  },
});

export default Button;
