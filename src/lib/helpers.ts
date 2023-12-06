export const isEmpty = (obj: any): boolean => {
  return [Object, Array].includes((obj || {}).constructor) && !Object.entries(obj || {}).length
}

export const toPixelString = (value: number | undefined): string | undefined => {
  return value !== undefined ? `${value}px` : undefined
}

const convertToCSSValue = (value?: number | string): number | string | undefined => {
  if (value === undefined || value === 'undefinedpx') {
    return undefined
  }

  return String(value)
}

export const removeUndefinedStyles = (styles: Record<string, number | string | undefined>) => {
  const cleanedStyles: Record<string, number | string> = {}

  Object.entries(styles).forEach(([key, value]) => {
    const cssValue = convertToCSSValue(value)
    if (cssValue !== undefined) {
      cleanedStyles[key] = cssValue
    }
  })

  return cleanedStyles
}
