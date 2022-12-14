import React, { memo } from 'react'

import { Text } from 'components'

import { ButtonProps } from './types'
import { StyledButton } from './styles'

export const Button = memo((props: ButtonProps) => {
  return (
    <StyledButton
      {...props}
      bg="white"
      paddingX={69}
      paddingY={16}
      borderRadius={24}
    >
      <Text color="black" variant="p1">
        {props.children}
      </Text>
    </StyledButton>
  )
})
