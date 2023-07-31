import { StatusBar } from 'react-native'
import GameScreen from './src/screens/GameScreen'
import BackgroundLayout from './src/components/BackgroundLayout'

function App(): JSX.Element {
  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={'#FFB58E'} />
      <BackgroundLayout>
        <GameScreen />
      </BackgroundLayout>
    </>
  )
}

export default App
