import { FC, useState } from 'react';
import { View, StyleSheet, StyleProp, ViewStyle, Button } from 'react-native';
import Item from './Item';
import { generateGrid } from '../utils/generateGrid';
const Sound = require('react-native-sound');
Sound.setCategory('Playback');

type TProps = {
  style?: StyleProp<ViewStyle>;
};

const Grid: FC<TProps> = ({ style }): JSX.Element => {
  const [grid, setGrid] = useState<number[]>(generateGrid);

  return (
    <>
      <View style={[styles.grid, style]}>
        {grid.map((item) => (
          <Item
            item={item}
            setGrid={setGrid}
            krya={item === 1 ? new Sound('krya.mp3', Sound.MAIN_BUNDLE) : null}
            key={'id' + Math.random().toString(16).slice(2)}
          />
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    rowGap: 20,
    alignContent: 'center',
  },
});

export default Grid;
