import LottieView from 'lottie-react-native'

const Bubbles = (): JSX.Element => {
  return (
    <>
      <LottieView source={require('../assets/lottie/bubbles_1.json')} autoPlay loop />
      <LottieView source={require('../assets/lottie/bubbles_2.json')} autoPlay loop />
      <LottieView source={require('../assets/lottie/bubbles_3.json')} autoPlay loop />
    </>
  )
}

export default Bubbles
