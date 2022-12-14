import { useCallback } from 'react'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { increment, decrement } from 'src/redux/slices/counterSlice'

export const useCounter = () => {
  const dispatch = useAppDispatch()
  const count = useAppSelector((state) => state.counter.value)

  const handleIncrement = useCallback(() => {
    dispatch(increment())
  }, [])

  const handleDecrement = useCallback(() => {
    dispatch(decrement())
  }, [])

  return {
    count,
    handleIncrement,
    handleDecrement
  }
}
