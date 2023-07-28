export const generateGrid = (): [{ isPressed: boolean; value: number }[][], number] => {
  const result: { isPressed: boolean; value: number }[][] = [[], [], []]
  let duckCount = 0

  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < 4; j++) {
      const oneOrZero = Math.random() >= 0.5 ? 1 : 0
      oneOrZero === 1 ? duckCount++ : duckCount
      result[i].push({ isPressed: false, value: oneOrZero })
    }
  }
  return [result, duckCount]
}
