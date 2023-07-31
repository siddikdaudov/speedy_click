import { FC } from 'react'
import { ImageBackground, StyleSheet, View } from 'react-native'
import { PropsWithChildren } from 'react'

type TProps = PropsWithChildren

const BackgroundLayout: FC<TProps> = ({ children }): JSX.Element => {
  return (
    <ImageBackground source={require('../assets/background.png')} style={styles.background}>
      {children}
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
})

export default BackgroundLayout
