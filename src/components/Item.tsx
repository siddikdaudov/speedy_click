import { FC, useEffect, useState } from 'react'
import { View, Pressable, StyleSheet } from 'react-native'
import DuckSVG from '../assets/icons/duck.svg'
import LifelineSVG from '../assets/icons/lifeline.svg'
import { SCREEN_WIDTH } from '../constants'
import { generateGrid } from '../utils/generateGrid'
const Sound = require('react-native-sound')
Sound.setCategory('Playback')

type TProps = {
  item: number
  duckCount: number
  setDuckCount: (param: number) => void
  setGrid: (param: number[][]) => void
}

const getItem = (value: number): JSX.Element => {
  switch (value) {
    case 0:
      return <LifelineSVG />
    case 1:
      return <DuckSVG />
    default:
      return <></>
  }
}

let counter = 0

const Item: FC<TProps> = ({
  item,
  duckCount,
  setDuckCount,
  setGrid,
}): JSX.Element => {
  const krya = new Sound('krya.mp3', Sound.MAIN_BUNDLE)
  const [isPressed, setPressed] = useState<boolean>(false)

  const handlePress = (item: number,): void => {
    if (item === 0 || isPressed) return
    krya.play()
    setPressed(true)
    counter++
    if (duckCount === counter) {
      counter = 0
      const [newGrid, count] = generateGrid()
      setGrid(newGrid)
      setDuckCount(count)
      setPressed(false)
    }
  }

  useEffect(() => {
    return () => krya.release()
  }, [])

  return (
    <Pressable
      onPress={() => handlePress(item)}
      style={[styles.item, isPressed ? styles.hidden : null]}
    >
      {getItem(item)}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  item: {
    width: 25 * (1 / 100) * SCREEN_WIDTH, // 25% от ширины экрана
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hidden: {
    opacity: 0,
  },
})

export default Item
