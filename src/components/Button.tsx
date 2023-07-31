import { FC, useRef, useState } from 'react';
import { Animated, Pressable, View, Text, StyleSheet } from 'react-native';

type TProps = {
  title: string;
  onPress: () => void;
};

const Button: FC<TProps> = ({ title, onPress }): JSX.Element => {
  const animation = useRef(new Animated.Value(0)).current;
  const [shadow, setShadow] = useState({ width: 0, height: 0 });

  const animationIn = () => {
    Animated.timing(animation, {
      toValue: 7,
      duration: 100,
      useNativeDriver: true,
    }).start(() => animationOut());
  };

  const animationOut = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  return (
    <>
      <Animated.View
        style={[styles.animate, { transform: [{ translateY: animation }] }]}
        onLayout={(event) => {
          const { width, height } = event.nativeEvent.layout;
          setShadow({ width, height });
        }}
      >
        <Pressable onPress={onPress} onPressIn={animationIn}>
          <Text style={styles.title}>{title}</Text>
        </Pressable>
      </Animated.View>
      <View style={[styles.shadow, { minWidth: shadow.width, minHeight: shadow.height }]} />
    </>
  );
};

const styles = StyleSheet.create({
  animate: {
    minWidth: 250,
    minHeight: 50,
    backgroundColor: '#15A0D1',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    zIndex: 1,
  },
  shadow: {
    backgroundColor: '#FFB58E',
    borderRadius: 30,
    transform: [{ translateY: -43 }],
  },
  title: {
    fontFamily: 'RussoOne-Regular',
    fontSize: 18,
    color: 'white',
  },
});

export default Button;
