import { FC, useEffect, useRef, useState } from 'react';
import { Animated, Easing } from 'react-native';
import LottieView from 'lottie-react-native';
import Dialog from './Dialog';

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

type TProps = {
  show: boolean;
};

const Countdown: FC<TProps> = ({ show }): JSX.Element => {
  const timerAnimation = useRef(new Animated.Value(0));
  const [isOpen, setOpen] = useState(show);

  useEffect(() => {
    const timer = setTimeout(() => {
      Animated.timing(timerAnimation.current, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start(() => setOpen(false));
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Dialog isOpen={isOpen}>
      <AnimatedLottieView
        source={require('../assets/lottie/3_2_1_go.json')}
        progress={timerAnimation.current}
      />
    </Dialog>
  );
};

export default Countdown;
