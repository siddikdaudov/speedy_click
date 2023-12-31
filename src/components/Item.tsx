import { FC, MutableRefObject, useRef, useState } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import DuckSVG from '../assets/icons/duckShadow.svg';
import LifelineSVG from '../assets/icons/lifelineShadow.svg.svg';
import { SCREEN_WIDTH } from '../constants';
import { generateGrid } from '../utils/generateGrid';

type TProps = {
  item: number;
  setGrid: (param: number[]) => void;
  krya: any;
  resetTimer: () => void;
  prizeCoins: MutableRefObject<number>;
};

const icons: Map<number, JSX.Element> = new Map([
  [0, <LifelineSVG />],
  [1, <DuckSVG />],
]);

let counter = 0;
const duckCount = 11;

const Item: FC<TProps> = ({ item, setGrid, krya, resetTimer, prizeCoins }): JSX.Element => {
  const [isPressed, setPressed] = useState<boolean>(false);
  const sound = krya;

  const handlePress = (item: number): void => {
    if (item === 0 || isPressed) return;

    sound.play(() => sound.release());
    setPressed(true);
    counter++;
    prizeCoins.current += 1;
    if (duckCount === counter) {
      counter = 0;
      const newGrid = generateGrid();
      setGrid(newGrid);
      setPressed(false);
      resetTimer();
    }
  };

  return (
    <Pressable
      onPress={() => handlePress(item)}
      style={[styles.item, isPressed ? styles.hidden : null]}
    >
      {icons.get(item)}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  item: {
    width: 20 * (1 / 100) * SCREEN_WIDTH, // 20% от ширины экрана
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hidden: {
    opacity: 0,
  },
});

export default Item;
