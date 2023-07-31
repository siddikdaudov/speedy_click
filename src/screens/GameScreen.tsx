import { View, StyleSheet } from 'react-native';
import PoolSVG from '../assets/icons/pool.svg';
import Grid from '../components/Grid';
import Timer from '../components/Timer';

const GameScreen = (): JSX.Element => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.sections}>
        <View style={styles.top}>
          <Timer />
        </View>
      </View>
      <View style={styles.sections}>
        <View style={styles.pool}>
          <PoolSVG style={styles.poolSVG} />
          <Grid style={styles.ducks} />
        </View>
      </View>
    </View>
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
});

export default GameScreen;
