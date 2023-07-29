import { FC, useState } from 'react'
import { View, StyleSheet, StyleProp, ViewStyle, Button } from 'react-native'
import Item from './Item'
import { generateGrid } from '../utils/generateGrid'

type TProps = {
  style?: StyleProp<ViewStyle>
}

const [initialGrid, count] = generateGrid()

const Grid: FC<TProps> = ({ style }): JSX.Element => {
  const [grid, setGrid] = useState<number[][]>(initialGrid)
  const [duckCount, setDuckCount] = useState<number>(count)

  console.log('render grid')

  return (
    <View style={[styles.grid, style]}>
      {grid.map((item, row) =>
        item.map((item, itemIndex) => (
          <Item
            item={item}
            duckCount={duckCount}
            setDuckCount={setDuckCount}
            setGrid={setGrid}
            key={'id' + Math.random().toString(16).slice(2)}
          />
        ))
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    rowGap: 20,
    alignContent: 'center',
  },
})

export default Grid
