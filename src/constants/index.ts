import { Dimensions } from 'react-native';

export const SCREEN_WIDTH: number = Dimensions.get('screen').width;
export const SCREEN_HEIGHT: number = Dimensions.get('screen').height;

export const GAME_TYPES = {
  coins: 'coins',
  timer: 'timer',
  infinity: 'infinity',
};
