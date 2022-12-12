import React from 'react'

import { Background, Button, Text } from 'components'
import { useCounter } from './use-counter'

export const Counter = () => {
  const { count, handleIncrement, handleDecrement } = useCounter()

  return (
    <Background variant="safe">
      <Button onPress={handleDecrement}>-1</Button>
      <Text variant="h1" color="green">
        {count}
      </Text>
      <Button onPress={handleIncrement}>+1</Button>
    </Background>
  )
}
