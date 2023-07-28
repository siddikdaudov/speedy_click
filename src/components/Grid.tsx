import { FC, useState, useEffect } from 'react'
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native'
import Item from './Item'
import { generateGrid } from '../utils/generateGrid'

type TProps = {
  style?: StyleProp<ViewStyle>
}

const [initialGrid, count] = generateGrid()

const Grid: FC<TProps> = ({ style }): JSX.Element => {
  const [grid, setGrid] = useState<{ isPressed: boolean; value: number }[][]>(initialGrid)
  const [duckCount, setDuckCount] = useState<number>(count)

  return (
    <View style={[styles.grid, style]}>
      {grid.map((item, row) =>
        item.map((item, itemIndex) => (
          <Item
            row={row}
            item={item}
            itemIndex={itemIndex}
            duckCount={duckCount}
            setDuckCount={setDuckCount}
            grid={grid}
            setGrid={setGrid}
            key={row + itemIndex}
          />
        ))
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  grid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    rowGap: 20,
    alignContent: 'center',
  },
})

export default Grid
