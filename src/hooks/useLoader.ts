import { useEffect, useRef } from 'react'

export const useLoader = (value: any[]) => {
  const isLoading = useRef(true)
  const initialRender = useRef(true)

  useEffect(() => {
    if (!initialRender.current) {
      isLoading.current = false
    }

    initialRender.current = false
  }, [value.length])

  return {isLoading: isLoading.current}
}