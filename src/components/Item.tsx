import { FC, useEffect } from 'react'
import { View, Pressable, StyleSheet } from 'react-native'
import DuckSVG from '../assets/icons/duck.svg'
import LifelineSVG from '../assets/icons/lifeline.svg'
import { SCREEN_WIDTH } from '../constants'
import { generateGrid } from '../utils/generateGrid'
const Sound = require('react-native-sound')
Sound.setCategory('Playback')

type TProps = {
  row: number
  item: { isPressed: boolean; value: number }
  itemIndex: number
  duckCount: number
  setDuckCount: (param: number) => void
  grid: { isPressed: boolean; value: number }[][]
  setGrid: (cb: (param: { isPressed: boolean; value: number }[][]) => { isPressed: boolean; value: number }[][]) => void
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

const Item: FC<TProps> = ({ row, item, itemIndex, duckCount, setDuckCount, grid, setGrid }): JSX.Element => {
  const krya = new Sound('krya.mp3', Sound.MAIN_BUNDLE)

  const handlePress = (row: number, item: number, itemIndex: number): void => {
    if (item === 0) return
    console.log(row, item, itemIndex)
    // const newGrid = grid.splice(row, 1, grid[row].splice(itemIndex, 1, { isPressed: true, value: item }))

    console.log(grid)
    krya.play()
    counter++
    if (duckCount === counter) {
      counter = 0
    }
  }

  useEffect(() => {
    return () => krya.release()
  }, [])

  return (
    <View style={styles.item}>
      {!item.isPressed ? (
        <Pressable onPress={() => handlePress(row, item.value, itemIndex)}>{getItem(item.value)}</Pressable>
      ) : null}
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    width: 25 * (1 / 100) * SCREEN_WIDTH, // 25% от ширины экрана
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Item
