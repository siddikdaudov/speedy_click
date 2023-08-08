import { FC } from 'react';
import { Modal, View, StyleSheet } from 'react-native';
import { PropsWithChildren } from 'react';

type TProps = PropsWithChildren<{
  isOpen: boolean;
}>;

const Dialog: FC<TProps> = ({ children, isOpen }): JSX.Element => {
  return (
    <Modal visible={isOpen} animationType='slide' transparent={true}>
      <View style={styes.children}>{children}</View>
    </Modal>
  );
};

const styes = StyleSheet.create({
  children: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default Dialog;
