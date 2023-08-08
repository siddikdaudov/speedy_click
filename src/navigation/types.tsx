import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type MainStackParamList = {
  Home: undefined;
  Game: undefined;
};

export type RootStackScreenProps<T extends keyof MainStackParamList> = NativeStackScreenProps<
  MainStackParamList,
  T
>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends MainStackParamList {}
  }
}
