import React from 'react'

const useDebounce = (value: string, delay: number): string => {
  const [debouncedValue, setDebouncedValue] = React.useState<string>(value)

  React.useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(debounceTimeout)
    }
  }, [value, delay])

  return debouncedValue
}

export default useDebounce
