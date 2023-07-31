import { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { PropsWithChildren } from 'react';
import TopLeftFrameSVG from '../assets/background/top_left_frame.svg';
import TopRightFrameSVG from '../assets/background/top_right_frame.svg';
import BottomLeftFrameSVG from '../assets/background/bottom_left_frame.svg';
import BottomRightFrameSVG from '../assets/background/bottom_right_frame.svg';
import TopLeftBushSVG from '../assets/background/top_left_bush.svg';
import TopRightBushSVG from '../assets/background/top_right_bush.svg';
import BottomLeftBushSVG from '../assets/background/bottom_left_bush.svg';
import BottomRightBushSVG from '../assets/background/bottom_right_bush.svg';
import BlueUmbrellaSVG from '../assets/background/blue_umbrella.svg';
import RedUmbrellaSVG from '../assets/background/red_umbrella.svg';
import RoundBushSVG from '../assets/background/round_bush.svg';
import DoublePointSVG from '../assets/background/double_point.svg';
import PointSVG from '../assets/background/point.svg';

type TProps = PropsWithChildren;

const BackgroundLayout: FC<TProps> = ({ children }): JSX.Element => {
  return (
    <View style={styles.background}>
      <TopLeftBushSVG style={{ position: 'absolute', left: 0, top: 0, zIndex: 1 }} />
      <TopRightBushSVG style={{ position: 'absolute', right: 0, top: 0, zIndex: 1 }} />
      <TopLeftFrameSVG style={{ position: 'absolute', left: 0, top: 0 }} />
      <TopRightFrameSVG style={{ position: 'absolute', right: 0, top: 0 }} />
      <BlueUmbrellaSVG style={{ position: 'absolute', left: 0, top: 100 }} />
      <RedUmbrellaSVG style={{ position: 'absolute', right: -80, top: 180 }} />
      <RoundBushSVG
        style={{ position: 'absolute', right: 130, top: 0, transform: [{ scale: 0.4 }] }}
      />
      <RoundBushSVG style={{ position: 'absolute', right: 90, top: 100 }} />
      <RoundBushSVG
        style={{ position: 'absolute', right: 150, top: 250, transform: [{ scale: 0.7 }] }}
      />
      <DoublePointSVG style={{ position: 'absolute', left: 30, top: 340 }} />
      <DoublePointSVG style={{ position: 'absolute', right: 30, top: 400 }} />
      <PointSVG style={{ position: 'absolute', left: 180, top: 90 }} />
      {children}
      <DoublePointSVG style={{ position: 'absolute', left: 160, bottom: 30 }} />
      <PointSVG style={{ position: 'absolute', right: 100, bottom: 50 }} />
      <BottomLeftBushSVG style={{ position: 'absolute', left: 0, bottom: -30, zIndex: 1 }} />
      <BottomRightBushSVG style={{ position: 'absolute', right: -30, bottom: -30, zIndex: 1 }} />
      <BottomLeftFrameSVG style={{ position: 'absolute', bottom: -30, left: 0 }} />
      <BottomRightFrameSVG style={{ position: 'absolute', bottom: 0, right: -30 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#FED4B0',
  },
});

export default BackgroundLayout;
