export const generateGrid = (): number[] => {
  const icons: number[] = [1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1];
  let currentIndex = icons.length;
  let randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [icons[currentIndex], icons[randomIndex]] = [icons[randomIndex], icons[currentIndex]];
  }

  return icons;
};
