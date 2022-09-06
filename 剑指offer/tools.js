export const swapTowValue = (arr, x, y) => {
  let temp = arr[x]
  arr[x] = arr[y]
  arr[y] = temp
}

export const less = (arr, v1, v2) => {
  return arr[v1] < arr[v2]
}
