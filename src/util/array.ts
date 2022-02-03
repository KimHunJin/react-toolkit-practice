type T = 'string' | 'number' | 'object'

export const createArray = (length: number, type: T) => {
  return Array.from({ length }, () => {
    switch (type) {
      case 'string': {
        return ''
      }
      case 'number': {
        return 0
      }
    }
    return {}
  })
}
