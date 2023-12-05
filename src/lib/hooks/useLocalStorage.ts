import React from 'react'

interface ReturnValue<T> {
  storedValue: T | null
  setValue: (value: T) => void
}

const useLocalStorage = <T>(key: string, initialValue: T): ReturnValue<T> => {
  const storedValue = JSON.parse(localStorage.getItem(key) || 'null') || initialValue

  const [value, setValue] = React.useState<T>(storedValue)

  const setStoredValue = (newValue: T) => {
    setValue(newValue)
    localStorage.setItem(key, JSON.stringify(newValue))
  }

  return { storedValue: value, setValue: setStoredValue }
}

export default useLocalStorage
